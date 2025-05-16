import Client from "../../domain/client";
import RemoteResource from "../../utils/http/RemoteResource";
import ClientServiceImpl from "./client-service-impl";
import MockRemoteResource from "../../utils/http/test/MockRemoteResource";
import { RemoteResourceDataProvider } from "../../utils/data-provider.ts/impl/remote-resource-data-provider";
import RemoteResourceFactory from "../../utils/http/RemoteResourceFactory";

describe("ClientServiceImpl", () => {
  const remoteResource: RemoteResource<Client> = new MockRemoteResource<Client>(
    "/client"
  );
  const factory: RemoteResourceFactory = {
    map: new Map<string, RemoteResource<Client>>(),
    get: (type) => remoteResource as any,
    create: (params) => remoteResource as any,
  };

  it("fetchClients SHOULD return a RemoteResourceDataProvider instance", () => {
    // prepare
    const service = new ClientServiceImpl(factory);

    // test
    const result = service.fetchClients();

    // validate
    expect(result).toBeInstanceOf(RemoteResourceDataProvider);
  });

  it("fetchClients SHOULD return data with id 'c1' WHEN id is passed.", async () => {
    // prepare
    const service = new ClientServiceImpl(factory);

    // test
    const result = service.fetchClients({ id: "c1" });
    const data = await result.fetchData();

    // validate
    expect(data).not.toBeUndefined();
    expect(data.results[0]).not.toBeUndefined();
    expect(data.results[0].id).toBe("c1");
  });
});
