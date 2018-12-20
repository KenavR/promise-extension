import { evaluate } from "../src/utils";

describe("Promise", () => {
  test("should throw Error", async () => {
    const expected = "Error";
    const promise$ = new Promise(evaluate);
    await expect(promise$).rejects.toThrow(expected);
  });

  test("has catch", () => {
    const promise$ = new Promise(evaluate);
    expect(promise$.then()).toHaveProperty("catch");
  });
});
