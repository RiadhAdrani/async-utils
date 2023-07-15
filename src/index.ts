/**
 * execute a timeout callback as an asynchronous function.
 * @param ms delay in milliseconds.
 * @param callback function to be called.
 */
export const runAfter = async <T>(callback: () => T, ms: number): Promise<T | void> => {
  return new Promise(resolve => {
    if (typeof callback !== 'function') {
      throw `[Utils] Unexpected Input: expected callback to be a function, but got "${typeof callback}"`;
    }

    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
};

/**
 * execute an asynchronous timeout.
 * @param time wait time
 */
export const wait = async (time: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
