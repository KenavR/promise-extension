import { ADDITIONAL_DATA, evaluate } from "./utils";

export class MyWrappedPromise {
  constructor(data) {
    this.data = data;
    this.rules = [];
    this.promise = new Promise(evaluate.bind(data));
  }

  then(callback) {
    this.promise.then(() => callback(this.data, ADDITIONAL_DATA));
  }

  catch(callback) {
    this.promise.catch(callback);
  }
}
