import ArrayDataProvider from "./array-data-provider";

type TestType = {
  id: number;
  name: string;
  age: number;
};

const data: TestType[] = [
  { id: 1, name: "carlo", age: 20 },
  { id: 2, name: "ale", age: 30 },
  { id: 3, name: "kike", age: 40 },
];

describe("ArrayDataProvider", () => {
  it("SHOULD create a new instance", () => {
    // prepare

    // test
    const dp = new ArrayDataProvider<number, TestType>({
      data,
      keyAttribute: "id",
    });

    // validate
    expect(dp).not.toBeUndefined();
  });

  it("fetchByKeys SHOULD return data filtered by keys", async () => {
    // prepare
    const dp = new ArrayDataProvider<number, TestType>({
      data,
      keyAttribute: "id",
    });

    // test
    const result = await dp.fetchByKeys({ keys: [1, 2] });

    // validate
    expect(result.results.size).toBe(2);
  });

  it("fetchData SHOULD return all data", async () => {
    // prepare
    const dp = new ArrayDataProvider<number, TestType>({
      data,
      keyAttribute: "id",
    });

    // test
    const result = await dp.fetchData();

    // validate
    expect(result.length).toBe(3);
  });

  it("fetchByKeys SHOULD return data filtered by attributes", async () => {
    // prepare
    const dp = new ArrayDataProvider<number, TestType>({
      data,
      keyAttribute: "id",
    });

    // test
    const result = await dp.fetchByKeys({
      keys: [1, 2],
      attributes: ["name"],
    });

    // validate
    expect(result.results.size).toBe(2);
    expect(result.results.get(1)).not.toBeUndefined();
    expect(result.results.get(1)?.data).toHaveProperty("name");
    expect(result.results.get(1)?.data).not.toHaveProperty("age");
  });

  it("SHOULD  create a new instanc WITHOUT keyAttribute", async () => {
    // prepare
    const dp = new ArrayDataProvider<number, TestType>({
      data,
    });

    // test
    const result = await dp.fetchByKeys({ keys: [0, 1] });

    // validate
    expect(result.results.size).toBe(2);
  });
});
