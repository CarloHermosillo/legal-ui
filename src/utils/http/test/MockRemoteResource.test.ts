import Lawsuit from "../../../domain/lawsuit";
import MockRemoteResource from "./MockRemoteResource";

describe("MockRemoteResource", () => {
  it("SHOULD return test data.", async () => {
    // prepare
    const path = "/lawsuit";
    const resource = new MockRemoteResource<Lawsuit>(path);

    // test
    const result = await resource.fetch();

    // validate
    expect(result).not.toBeNull();
    expect(result).toHaveLength(2);
  });
});
