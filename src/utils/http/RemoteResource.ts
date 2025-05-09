export type ReadArgs = {
  url: string;
  headers: Record<string, string>;
  params: Record<string, unknown>;
};

/**
 * Represents a resource served in remote server.
 */
export default interface RemoteResource<T> {
  /**
   * Fetches data from the remote resource.
   *
   * @returns {Promise<T[]>} A promise that resolves to the data of type T.
   */
  fetch(): Promise<T[]>;
}
