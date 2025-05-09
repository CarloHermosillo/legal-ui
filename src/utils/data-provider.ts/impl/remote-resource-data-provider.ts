import DataProvider, {
  FetchByKeysParams,
  FetchByKeysResult,
} from "../data-provider";
import RemoteResource from "../../http/RemoteResource";

export type RemoteResourceDataProviderOptions<K> = {
  keyAttribute?: string;
  keys?: K[] | null;
};

/**
 * Implementation of {@link DataProvider} to provide data from a remote resource.
 *
 * @template K The type of key used to identify data.
 * @template V The type of value returned by the data provider.
 */
export class RemoteResourceDataProvider<K, V> implements DataProvider<K, V> {
  /**
   * Creates a new instance.
   *
   * @param remoteResource The remote resource to connect to.
   */
  constructor(
    private readonly remoteResource: RemoteResource<V>,
    private readonly options: RemoteResourceDataProviderOptions<K> = {}
  ) {}

  /**
   * Retrieves all data from the provider.
   *
   * @returns A promise that resolves to an array of values.
   */
  async fetchData(): Promise<V[]> {
    return this.remoteResource.fetch();
  }

  /**
   * Retrieves specific data from the provider based on the provided keys.
   *
   * @param params The parameters for the fetch operation, including the keys to fetch.
   * @returns A promise that resolves to an array of values.
   */
  async fetchByKeys(
    params: FetchByKeysParams<K>
  ): Promise<FetchByKeysResult<K, V>> {
    const response = await this.remoteResource.fetch();

    const result: FetchByKeysResult<K, V> = {
      results: new Map(),
    };

    const keyAttribute = this.options?.keyAttribute ?? null;

    response.forEach((value) => {
      let key;
      if (keyAttribute) {
        key = value[keyAttribute as keyof typeof value] as K;
      } else {
        key = 0;
      }
      result.results.set(key as K, { data: value, key: key as K });
    });

    return result;
  }
}
