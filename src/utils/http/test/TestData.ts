import Lawsuit from "../../../domain/lawsuit";

const testData: Record<string, any> = {
  "/api/client/c1/lawsuit": [
    {
      id: "l1",
      payed: false,
      fee: 1000,
      topic: "test topic",
      lawsuitType: "test type",
    },
    {
      id: "l2",
      payed: false,
      fee: 1500,
      topic: "test topic",
      lawsuitType: "test type",
    },
  ] as Lawsuit[],

  "/api/client/c2/lawsuit": [
    {
      id: "l3",
      payed: false,
      fee: 2000,
      topic: "test topic",
      lawsuitType: "test type",
    },
  ] as Lawsuit[],

  "/api/client": [
    {
      id: "c1",
      name: "Carlo",
      address: "test address",
    },
    {
      id: "c2",
      name: "Ale",
      address: "test address",
    },
  ],

  "/api/process": [
    {
      id: "p1",
      fileNumber: "test file number",
      address: "test address",
    },
  ] as any,
  "/api/comment": [
    {
      id: "c1",
      content: "test content",
    },
  ] as any,
  "/api/user": {
    name: "test user",
  },
};

export default testData;
