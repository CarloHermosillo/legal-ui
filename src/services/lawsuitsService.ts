import Lawsuit from "../domain/lawsuit";
import DataProvider from "../utils/data-provider.ts/data-provider";

/**
 * Service that provides access to lawsuits.
 *
 * @interface
 */
export default interface LawsuitsService {
  /**
   * Retrieves all lawsuits from the provider.
   *
   * @returns A data provider that provides access to all lawsuits.
   */
  fetchLawsuits(): DataProvider<string, Lawsuit>;

  /**
   * Creates a new lawsuit.
   *
   * @param lawsuit The lawsuit to create.
   * @returns A promise that resolves when the lawsuit has been created.
   */
  createLawsuits(lawsuit: Lawsuit): Promise<void>;
}
