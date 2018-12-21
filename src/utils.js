export const ADDITIONAL_DATA = "My Additional Data";
export const ERROR_MESSAGE = "Error";

export function evaluate(resolve, reject) {
  const data = this;
  function getPromise(data) {
    return !!data ? Promise.resolve(data) : Promise.reject(new Error("Error"));
  }

  getPromise(data)
    .then(resolve)
    .catch(reject);
}
