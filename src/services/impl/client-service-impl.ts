import Client from "../../domain/client";
import Lawsuit from "../../domain/lawsuit";
import DataProvider from "../../utils/data-provider.ts/data-provider";
import ArrayDataProvider from "../../utils/data-provider.ts/impl/array-data-provider";
import { RemoteResourceDataProvider } from "../../utils/data-provider.ts/impl/remote-resource-data-provider";
import RemoteResourceFactory from "../../utils/http/RemoteResourceFactory";
import ClientService, { FetchParams } from "../client-service";

export default class ClientServiceImpl implements ClientService {
  constructor(private readonly remoteResourceFactory: RemoteResourceFactory) {}

  /**
   * @inheritdoc
   */
  fetchLawsuits(params?: FetchParams): DataProvider<string, Lawsuit> {
    if (!params?.id) {
      return new ArrayDataProvider<string, Lawsuit>({
        data: [],
      });
    }

    const resource = this.remoteResourceFactory.create<Lawsuit>({
      url: `/api/client/${params.id}/lawsuit`,
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });

    return new RemoteResourceDataProvider(resource, {
      keyAttribute: "id",
    });
  }

  /**
   * @inheritdoc
   */
  fetchClients(params?: FetchParams): DataProvider<string, Client> {
    const resource = this.remoteResourceFactory.create<Client>({
      url: `/api/client`,
      headers: { "Content-Type": "application/json" },
      method: "GET",
    });

    return new RemoteResourceDataProvider(resource, {
      keyAttribute: "id",
    });
  }
}
