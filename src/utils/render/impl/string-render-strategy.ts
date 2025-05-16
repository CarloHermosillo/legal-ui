import RenderStrategy from "../render-startegy";

/**
 * Implementation of {@link RenderStrategy} to render strings.
 */
export default class StringRenderStrategy implements RenderStrategy<string> {
  /**
   * Renders the given string.
   *
   * @param {string} value The string to render.
   * @returns {string} The rendered string.
   */
  render(value: string): string {
    return value;
  }
}
