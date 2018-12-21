import { evaluate, ADDITIONAL_DATA, ERROR_MESSAGE } from "../src/utils";

describe("Promise", () => {
  test("should throw Error", async () => {
    const expected = ERROR_MESSAGE;
    const promise$ = new Promise(evaluate.bind(undefined));
    await expect(promise$).rejects.toThrow(expected);
  });

  test("has catch", async () => {
    const promise$ = new Promise(evaluate.bind([]));
    await expect(promise$.then()).toHaveProperty("catch");
  });

  test("resolves with Data", done => {
    const promise$ = new Promise(evaluate.bind(ADDITIONAL_DATA));

    promise$.then(data => {
      expect(data).toEqual(ADDITIONAL_DATA);
      done();
    });
  });
});
