import Client from "../domain/client";
import Lawsuit from "../domain/lawsuit";
import DataProvider from "../utils/data-provider.ts/data-provider";

/**
 * Service interface for managing clients.
 */
export default interface ClientService {
  /**
   * Retrieves all clients from the provider.
   *
   * @returns {DataProvider<string, Client>} A data provider that provides access to all clients.
   */
  fetchClients(params?: FetchParams): DataProvider<string, Client>;

  fetchLawsuits(params?: FetchParams): DataProvider<string, Lawsuit>;
}

export type FetchParams = {
  id?: string;
};
