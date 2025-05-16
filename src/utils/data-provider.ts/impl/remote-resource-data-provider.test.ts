import Lawsuit from "../../../domain/lawsuit";
import MockRemoteResource from "../../http/test/MockRemoteResource";
import {
  RemoteResourceDataProvider,
  RemoteResourceDataProviderOptions,
} from "./remote-resource-data-provider";

describe("RemoteResourceDataProvider", () => {
  it("SHOULD create a new instance", () => {
    // prepare
    const resource = new MockRemoteResource<Lawsuit>("/lawsuit");
    const options: RemoteResourceDataProviderOptions<number> = {
      keyAttribute: "id",
    };

    // test
    const dp = new RemoteResourceDataProvider(resource, options);

    // validate
    expect(dp).not.toBeUndefined();
  });

  it("fetchData SHOULD return data from the resource", async () => {
    // prepare
    const resource = new MockRemoteResource<Lawsuit>("/lawsuit");
    const options: RemoteResourceDataProviderOptions<number> = {
      keyAttribute: "id",
    };
    const dp = new RemoteResourceDataProvider(resource, options);

    // test
    const result = await dp.fetchData();

    // validate
    expect(result).not.toBeNull();
    expect(result.results.length).toBe(2);
  });

  it("fetchByKeys SHOULD return data filtered by keys", async () => {
    // prepare
    const resource = new MockRemoteResource<Lawsuit>("/lawsuit");
    const options: RemoteResourceDataProviderOptions<number> = {
      keyAttribute: "id",
    };
    const dp = new RemoteResourceDataProvider(resource, options);

    // test
    const result = await dp.fetchByKeys({ keys: [1, 2] });

    // validate
    expect(result.results.size).toBe(2);
  });
});
