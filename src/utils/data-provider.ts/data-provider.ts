/**
 * Interface for a data provider that can fetch data.
 *
 * @template K The type of key used to identify data.
 * @template V The type of value returned by the data provider.
 */
export default interface DataProvider<K, V> {
  /**
   * Retrieves all data from the provider.
   *
   * @returns A promise that resolves to an array of values.
   */
  fetchData(param?: FetchDataParams<V>): Promise<FetchDataResult<K, V>>;

  /**
   * Retrieves specific data from the provider based on the provided keys.
   *
   * @param params The parameters for the fetch operation, including the keys to fetch.
   * @returns A promise that resolves to an array of values.
   */
  fetchByKeys(params: FetchByKeysParams<K>): Promise<FetchByKeysResult<K, V>>;
}

/**
 * Represents the result of a fetch by keys operation.
 *
 * @template K The type of key used to identify data.
 * @template V The type of value returned by the data provider.
 */
export interface FetchByKeysResult<K, V> {
  /**
   * The results of the fetch operation, keyed by the key used to fetch the data.
   */
  readonly results: Map<K, Item<K, V>>;

  /**
   * The parameters used to fetch the data.
   */
  readonly fetchParams?: FetchByKeysParams<K>;
}

/**
 * Parameters for fetching data by keys.
 *
 * @template K The type of keys used to fetch the data.
 */
export interface FetchByKeysParams<K> {
  /**
   * The keys used to identify the data to fetch.
   */
  keys: K[];

  /**
   * Optional attributes to filter the fetched data.
   */
  attributes?: string[];
}

/**
 * Parameters for fetching data.
 *
 * @template V The type of value returned by the data provider.
 */
export interface FetchDataParams<V> {
  /**
   * Optional attributes to filter the fetched data.
   */
  attributes?: string[];
}

/**
 * Represents the result of a fetch operation.
 *
 * @template K The type of key used to identify data.
 * @template V The type of value returned by the data provider.
 */
export interface FetchDataResult<K, V> {
  /**
   * The results of the fetch operation.
   */
  results: V[];

  /**
   * The parameters used to fetch the data.
   */
  fetchParams?: FetchDataParams<V>;

  /**
   * The keys used to identify the data.
   */
  keys?: K[];
}

/**
 * Represents an item of data provided by a data provider.
 *
 * @template K The type of key used to identify the data.
 * @template V The type of value contained in the data.
 * @property {V} data - The data item.
 * @property {K} key - The key used to identify the data item.
 */
export interface Item<K, V> {
  data: V;
  key: K;
}
