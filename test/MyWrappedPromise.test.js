import { MyWrappedPromise } from "../src/MyWrappedPromise";
import { ERROR_MESSAGE, ADDITIONAL_DATA } from "../src/utils";

describe("MyPromise", () => {
  test("should throw Error", async () => {
    const expected = ERROR_MESSAGE;

    const promise$ = new MyWrappedPromise([]);
    await expect(promise$).rejects.toThrow(expected);
  });

  test("has catch", () => {
    const promise$ = new MyWrappedPromise([]);
    expect(promise$.then()).toHaveProperty("catch");
  });

  test("resolves with Data", done => {
    const expected = "Test";
    const promise$ = new MyWrappedPromise(expected);

    promise$.then((data, additional) => {
      expect(data).toEqual(expected);
      expect(additional).toEqual(ADDITIONAL_DATA);
      done();
    });
  });
});
