import Lawsuit from "./lawsuit";

export default interface Client {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  curp: string;
  rfc: string;
  patronRegistry: string | undefined;
  lawsuits: Lawsuit[];
  comments: Comment[];
}
