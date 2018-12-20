export function evaluate(resolve, reject) {
  function getPromise() {
    return Promise.reject(new Error("Error"));
  }

  getPromise()
    .then(resolve)
    .catch(reject);
}
