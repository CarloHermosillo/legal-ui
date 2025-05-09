import env from "../../environments/environment";
import RemoteResource from "./RemoteResource";
import RestRemoteResource from "./impl/RestRemoteResource";
import MockRemoteResource from "./test/MockRemoteResource";

export default class RemoteResourceFactory {
  static create(): RemoteResource {
    switch (env.type) {
      case "local":
        return new RestRemoteResource();
      default:
        return new MockRemoteResource();
    }
  }
}
