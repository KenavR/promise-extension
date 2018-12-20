import { evaluate } from "./utils";

export class MyPromise {
  constructor(data) {
    this.data = data;
    this.rules = [];
    this.promise = new Promise(evaluate);
  }

  then(callback) {
    return this.promise.then(() => callback(this.data, "My Message"));
  }

  catch(callback) {
    return this.promise.catch(callback);
  }
}
