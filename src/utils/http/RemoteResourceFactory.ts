import env from "../../environments/environment";
import RemoteResource from "./RemoteResource";
import RestRemoteResource from "./impl/RestRemoteResource";
import MockRemoteResource from "./test/MockRemoteResource";
import Client from "../../domain/client";
import Lawsuit from "../../domain/lawsuit";

type CreateArgs = {
  url: string;
  headers: Record<string, string>;
  method: string;
  mockUrl?: string;
};

export default class RemoteResourceFactory {
  map = new Map<string, RemoteResource<Client | Lawsuit>>();

  constructor() {
    this.map.set(
      "client",
      this.create({
        url: "/api/client",
        headers: { "Content-Type": "application/json" },
        method: "GET",
        mockUrl: "/client",
      })
    );
    this.map.set(
      "lawsuit",
      this.create({
        url: "/api/lawsuit",
        headers: { "Content-Type": "application/json" },
        method: "GET",
        mockUrl: "/lawsuit",
      })
    );
  }

  get<T>(type: string): RemoteResource<T> {
    return this.map.get(type) as RemoteResource<T>;
  }

  create<T>(params: CreateArgs): RemoteResource<T> {
    switch (env.type) {
      case "local":
        return new RestRemoteResource<T>({
          url: `${env.baseUrl}${params.url}`,
          headers: params.headers,
          method: params.method,
        });
      default:
        return new MockRemoteResource<T>(params.url);
    }
  }
}
