import RestRemoteResource from "../impl/RestRemoteResource";
import testData from "./TestData";

export default class MockRemoteResource<T> extends RestRemoteResource<T> {
  constructor(
    private readonly path: string,
    private readonly method: string = "GET"
  ) {
    super({ url: path, method });
  }

  async fetch(): Promise<T[]> {
    const data = testData[this.path];

    return Promise.resolve(data);
  }
}
