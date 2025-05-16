import Lawsuit from "../../domain/lawsuit";
import RemoteResource from "../../utils/http/RemoteResource";
import LawsuitsServiceImp from "./lawsuitsServiceImpl";

describe("lawsuitsServiceImpl", () => {
  const lawsuit = {} as Lawsuit;

  const remoteResource: RemoteResource<Lawsuit> = {
    fetch: () => Promise.resolve([lawsuit]),
  };

  it("fethCases", async () => {
    // prepare
    const service = new LawsuitsServiceImp(remoteResource);

    //test
    const result = await service.fetchLawsuits();

    //validate
    expect(result).not.toBeNull();
  });
});
