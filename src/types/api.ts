import type { RawAxiosRequestHeaders } from 'axios';

export interface PaginationData {
  limit?: number;
  offset?: number;
}
export interface RequestConfig {
  headers?: RawAxiosRequestHeaders;
  params?: PaginationData;
  signal?: AbortSignal;
}
