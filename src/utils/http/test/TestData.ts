import Lawsuit from "../../../domain/lawsuit";

const testData: Record<string, any> = {
  "/lawsuit": [
    {
      id: "l1",
      payed: false,
      fee: 1000,
      topic: "test topic",
      lawsuitType: "test type",
      client: {
        id: "c1",
        name: "Carlo",
        lastName: "Hermosillo",
      },
    },
    {
      id: "l2",
      payed: false,
      fee: 1500,
      topic: "test topic",
      lawsuitType: "test type",
      client: {
        id: "c1",
        name: "Carlo",
        lastName: "Hermosillo",
      },
    },
  ] as Lawsuit[],
};

export default testData;
