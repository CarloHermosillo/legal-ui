import Lawsuit from "../../domain/lawsuit";
import LawsuitsService from "../lawsuitsService";
import RemoteResource from "../../utils/http/RemoteResource";
import DataProvider from "../../utils/data-provider.ts/data-provider";
import { RemoteResourceDataProvider } from "../../utils/data-provider.ts/impl/remote-resource-data-provider";

export default class LawsuitsServiceImpl implements LawsuitsService {
  constructor(private readonly remoteResource: RemoteResource<Lawsuit>) {}

  /**
   * @inheritdoc
   */
  fetchLawsuits(): DataProvider<string, Lawsuit> {
    return new RemoteResourceDataProvider(this.remoteResource, {
      keyAttribute: "id",
    });
  }

  /**
   * @inheritdoc
   */
  createLawsuits(lawsuit: Lawsuit): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
