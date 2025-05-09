import RemoteResource from "../RemoteResource";

/**
 * The parameters for creating a new RestRemoteResource.
 *
 * @template T The type of data expected in the response.
 * @property {string} url The URL of the remote resource.
 * @property {Record<string, string>} headers The headers to include with the request.
 * @property {URLSearchParams} [params] The query parameters to pass with the request.
 * @property {string} method The HTTP method to use.
 * @property {T} [body] The request body.
 */
export type RestRemoteResourceArgs<T> = {
  url: string;
  headers?: Record<string, string>;
  params?: URLSearchParams;
  method: string;
  body?: T;
};

/**
 * A class representing a REST remote resource that can send HTTP requests.
 *
 * @template T The type of data expected in the response.
 */
export default class RestRemoteResource<T> implements RemoteResource<T> {
  /**
   * Constructs a new instance of RestRemoteResource.
   *
   * @param {RestRemoteResourceArgs<T>} args - The arguments required to configure the request.
   */
  constructor(private readonly args: RestRemoteResourceArgs<T>) {}

  /**
   * @inheritdoc
   */
  async fetch(): Promise<T[]> {
    const { url, method, headers, body, params } = this.args;

    const urlWithParams =
      params && params.size > 0 ? `${url}?${params.toString()}` : url;

    const request = new Request(urlWithParams, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    const response = await fetch(request);

    return response.json();
  }
}
