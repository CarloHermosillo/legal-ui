import RenderStrategy from "../render-startegy";

/**
 * Implementation of {@link RenderStrategy} to render numbers.
 * @class NumberRenderStrategy
 * @implements {RenderStrategy.<number>}
 */
export default class NumberRenderStrategy implements RenderStrategy<number> {
  /**
   * Renders the given number.
   *
   * @param {number} value The number to render.
   * @returns {string} The rendered number as a string.
   */
  render(value: number): string {
    return value.toString();
  }
}
