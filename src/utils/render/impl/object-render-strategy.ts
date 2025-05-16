import RenderStrategy from "../render-startegy";

type ObjectRenderStrategyOptions = {
  displayKey?: string;
};

/**
 * Implementation of {@link RenderStrategy} to render objects.
 * @class ObjectRenderStrategy
 * @implements {RenderStrategy.<object>}
 */
export default class ObjectRenderStrategy implements RenderStrategy<object> {
  constructor(private readonly options?: ObjectRenderStrategyOptions) {}
  /**
   * Renders the given object.
   *
   * @param {object} value The object to render.
   * @returns {string} The rendered object.
   */
  render(value: object): string {
    const key = this.options?.displayKey ?? "id";

    return value[key as keyof typeof value] as string;
  }
}
