import BooleanRenderStrategy from "./impl/boolean-render-strategy";
import NumberRenderStrategy from "./impl/number-render-startegy";
import ObjectRenderStrategy from "./impl/object-render-strategy";
import StringRenderStrategy from "./impl/string-render-strategy";

/**
 * RenderStrategy interface.
 * @interface RenderStrategy
 * @template T The type of the value to be rendered.
 * @property {function} render - Renders the value.
 */
export default interface RenderStrategy<T> {
  /**
   * Renders the value.
   * @param {T} value - The value to be rendered.
   * @returns {string} The rendered value.
   */
  render(value: T): string;
}
/**
 * Creates a render strategy for a given type.
 * @param {string} typeName - The name of the type to create a render strategy for.
 * @returns {RenderStrategy<any>} A render strategy for the given type.
 */
export function createRenderStrategyByType(
  typeName: string
): RenderStrategy<any> {
  switch (typeName) {
    case "string":
      return new StringRenderStrategy();
    case "boolean":
      return new BooleanRenderStrategy();
    case "object":
      return new ObjectRenderStrategy();
    case "number":
      return new NumberRenderStrategy();
    default:
      throw new Error(`No render strategy for type '${typeName}'`);
  }
}
