/**
 * Logs messages only in development mode
 * Log function works only in development and removed in production
 * @param args - The arguments to log
 */
const log = (...args: unknown[]): void => {
  if (import.meta.env.DEV) {
    console.log(...args);
  }
};

export default log;
