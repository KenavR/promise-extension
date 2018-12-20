import { evaluate } from "./utils";

export class MyPromise {
  constructor(data) {
    this.data = data;
    this.rules = [];
    this.promise = new Promise(evaluate);
  }

  then(callback) {
    this.promise.then(() => callback(this.data, "My Message"));
  }

  catch(callback) {
    this.promise.catch(callback);
  }
}
