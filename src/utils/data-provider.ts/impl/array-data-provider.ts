import DataProvider, {
  FetchByKeysParams,
  FetchByKeysResult,
  Item,
} from "../data-provider";

/**
 * Class to provide data from an array.
 *
 * @template K The type of key used to identify data.
 * @template V The type of value returned by the data provider.
 */
export default class ArrayDataProvider<K, V extends object>
  implements DataProvider<K, V>
{
  private data: V[];
  private keyAttribute: string | null;
  private keys: K[] | null;

  /**
   * Creates a new instance.
   *
   * @param params The parameters for creating the data provider.
   */
  constructor(params: ArrayDataProviderParams<K, V>) {
    const { data, keyAttribute, keys } = params;

    this.keyAttribute = keyAttribute ?? null;
    this.keys = keys ?? null;
    this.data = data ?? [];
  }

  /**
   * Retrieves all data from the provider.
   *
   * @returns A promise that resolves to an array of values.
   */
  fetchData(): Promise<V[]> {
    return Promise.resolve(this.data);
  }

  /**
   * Retrieves specific data from the provider based on the provided keys.
   *
   * @param params The parameters for the fetch operation, including the keys to fetch.
   * @returns A promise that resolves to an array of values.
   */
  fetchByKeys(params: FetchByKeysParams<K>): Promise<FetchByKeysResult<K, V>> {
    return new Promise((resolve, reject) => {
      this._generateKeysIfNeeded();

      const results = new Map<K, Item<K, V>>();

      const keys = this.keys!;

      params.keys.forEach((key) => {
        let keyIndex = null;

        for (let i = 0; i < keys?.length; i++) {
          if (key === keys[i]) {
            keyIndex = i;
            break;
          }
        }

        if (keyIndex !== null) {
          let row = this.data[keyIndex];

          if (params.attributes) {
            row = this._filterAttributes(row, params.attributes);
          }

          results.set(key, { data: row, key: key as K });
        }
      });

      resolve({ fetchParams: params, results });
    });
  }

  /**
   * Generates the keys for the data provider, if they haven't been generated yet.
   */
  _generateKeysIfNeeded(): void {
    if (this.keys === null) {
      this.keys = [];

      if (this.keyAttribute !== null) {
        const key: string = this.keyAttribute;
        this.keys = this.data.map(
          (value: V) => value[key as keyof typeof value] as K
        );
      } else {
        this.keys = Array.from({ length: this.data.length }, (_, i) => i as K);
      }
    }
  }

  /**
   * Filters the attributes of a row to only include the ones specified.
   *
   * @param row The row to filter.
   * @param attributes The attributes to include.
   * @returns The filtered row.
   */
  _filterAttributes(row: V, attributes: string[]): V {
    const updated = {} as V;

    for (let attr of attributes) {
      if (Object.hasOwn(row, attr)) {
        updated[attr as keyof typeof updated] = row[attr as keyof typeof row];
      }
    }

    return updated;
  }
}

/**
 * Parameters for creating an array data provider.
 *
 * @template K The type of key used to identify data.
 * @template V The type of value contained in the data.
 * @property {V[]} data - The array of data items.
 * @property {string} [keyAttribute] - The attribute used as a key to identify data items.
 * @property {K[] | null} [keys] - An optional array of keys corresponding to the data items.
 */
type ArrayDataProviderParams<K, V> = {
  data: V[];
  keyAttribute?: string;
  keys?: K[] | null;
};
