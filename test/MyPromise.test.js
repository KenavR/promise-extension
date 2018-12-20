import { MyPromise } from "../src/MyPromise";

describe("MyPromise", () => {
  test("should throw Error", async () => {
    const expected = "Error";

    const promise$ = new MyPromise([]);
    await expect(promise$).rejects.toThrow(expected);
  });

  test("has catch", () => {
    const promise$ = new MyPromise([]);
    expect(promise$.then()).toHaveProperty("catch");
  });
});
