import { ADDITIONAL_DATA, evaluate } from "./utils";

export class MyExtendedPromise extends Promise {
    
  constructor(executor, data) {
    super(executor);
    this.data = data;
    this.rules = [];
  }

  static create(data) {
      return new MyExtendedPromise(evaluate.bind(data), data);
  }

  then(callback) {
    return super.then(() => callback(this.data, ADDITIONAL_DATA));
  }
}
