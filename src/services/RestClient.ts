/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Rest Client class
 * Responsible for consuming Api endpoints
 *
 * * getRequest
 * * postRequest
 * * putRequest
 * * patchRequest
 * * deleteRequest
 */

import axios from 'axios';

import { handleNotificationAlert, log } from '@/utils';

import type { RequestConfig } from '@/types/api.ts';
import type { AxiosError, AxiosResponse } from 'axios';

import { axiosInstance } from './axiosInstance';

const getErrorMessage = (error: any, defaultErrorMessage?: string): string => {
  const defaultMessage = defaultErrorMessage || 'Something went wrong';

  if (error?.response) {
    if (error.response.status === 422 && error.response.data?.status) {
      return error.response.data.status.errors ?? error.response.data.status.message ?? defaultMessage;
    }

    return error.response?.data?.message ?? error.response?.data ?? defaultMessage;
  }

  return error?.message ?? error?.data?.message ?? defaultMessage;
};

const requestWithRetry = async <T>(requestFn: () => Promise<AxiosResponse<T>>, retries: number): Promise<AxiosResponse<T>> => {
  let count = 0;

  while (true) {
    try {
      return await requestFn();
    } catch (error) {
      count++;

      if (!axios.isAxiosError(error)) {
        throw error;
      }

      if (count <= retries && !(axios.isCancel(error) || (error instanceof Error && error.name === 'CanceledError'))) {
        const delay = 300 * 2 ** (count - 1);
        console.warn(`Retry #${count} after ${delay}ms`);
        await new Promise(resolve => {
          window.setTimeout(resolve, delay);
        });
      } else {
        throw error;
      }
    }
  }
};
export const RestClient = {
  get: async <T>(
    url: string,
    config?: RequestConfig,
    defaultErrorMessage?: string,
    retries: number = 3,
    returnError: boolean = false,
    shouldRedirect: ((redirect: boolean) => void) | undefined = undefined
  ): Promise<AxiosResponse<T> | AxiosError | undefined> => {
    try {
      const response = await requestWithRetry<T>(() => axiosInstance.get<T>(url, config), retries);

      return response;
    } catch (error: any) {
      if (axios.isCancel(error) || (error instanceof Error && error.name === 'CanceledError')) {
        console.warn(`Request Cancelled`);
        return;
      }

      const message = getErrorMessage(error, defaultErrorMessage);
      handleNotificationAlert(message, 'error');

      if (shouldRedirect) {
        shouldRedirect(true);
      }

      if (error?.response) {
        log('getRequest Response:', {
          data: error.response.data,
          status: error.response.status,
          headers: error.response.headers,
        });
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        log('getRequest No Response:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        log('getRequest Error Message:', error.message);
      }

      return returnError ? error : undefined;
    }
  },
};

export default RestClient;
