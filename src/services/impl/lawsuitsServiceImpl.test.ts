import Lawsuit from "../../domain/lawsuit";
import LawsuitsServiceImp from "./lawsuitsServiceImpl";

describe("lawsuitsServiceImpl", () => {

  const lawsuit = {} as Lawsuit;

  const remoteResource = {
    read: () => Promise.resolve(lawsuit)
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
