import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", function () {
  test("test with one param", () => {
    const params = getQueryParams({
      test: "test"
    });
    expect(params).toBe("?test=test");
  });
  test("test with multiply param", () => {
    const params = getQueryParams({
      test: "test",
      more: "more"
    });
    expect(params).toBe("?test=test&more=more");
  });
  test("test with undefiend", () => {
    const params = getQueryParams({
      test: "test",
      more: undefined
    });
    expect(params).toBe("?test=test");
  });
});
