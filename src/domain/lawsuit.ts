import Client from "./client";
import Process from "./process";

export default interface Lawsuit {
  id: string;
  topic: string;
  fee: number;
  payed: boolean;
  lawsuitType: string;
  client: Client;
  processes: Process[];
  comments: Comment[];
}