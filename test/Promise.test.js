import { evaluate } from "../src/utils";

describe("Promise", () => {
  test("should throw Error", () => {
    const expected = "Error";
    const promise$ = new Promise(evaluate);
    expect(promise$).rejects.toThrow(expected);
  });

  test("has catch", () => {
    const promise$ = new Promise(evaluate);
    expect(promise$.then()).toHaveProperty("catch");
  });
});
