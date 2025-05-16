import RenderStrategy from "../render-startegy";

/**
 * Implementation of {@link RenderStrategy} to render booleans.
 * @class BooleanRenderStrategy
 * @implements {RenderStrategy.<boolean>}
 */
export default class BooleanRenderStrategy implements RenderStrategy<boolean> {
  /**
   * Renders the given boolean.
   *
   * @param {boolean} value The boolean to render.
   * @returns {string} The rendered boolean.
   */
  render(value: boolean): string {
    return value ? "Y" : "N";
  }
}
