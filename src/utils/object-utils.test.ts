import { clone } from "./object-utils";

describe("object-utils", () => {
  it("clone SHOULD return deep copy of input object", () => {
    // prepare
    const input = {
      a: 1,
      b: "2",
      c: {
        c1: "3"
      },
      d: [ 4, 5 ]
    };

    // test
    const result = clone(input);

    // validate
    expect(result).not.toBeNull();

    expect(result).toHaveProperty("a");
    expect(result).toHaveProperty("b");
    expect(result).toHaveProperty("c");
    expect(result).toHaveProperty("d");

    expect(result["d"]).toHaveLength(2);
  });
});