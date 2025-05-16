import React from "react";
import Table from "../../components/table/Table";
import LawsuitsService from "../../services/lawsuitsService";
import Lawsuit from "../../domain/lawsuit";
import DataProvider from "../../utils/data-provider.ts/data-provider";
import Select from "../../components/select/select";
import ClientService from "../../services/client-service";
import Client from "../../domain/client";

type Props = {
  lawsuitService?: LawsuitsService;
  clientService: ClientService;
};
type State = {
  clientDP: DataProvider<string, Client>;
  lawsuitDP: DataProvider<string, Lawsuit> | null;
};

export default class LawsuitsPage extends React.Component<Props, State> {
  private readonly clientService: ClientService;

  constructor(props: Props) {
    super(props);

    this.clientService = props.clientService;

    this.state = {
      clientDP: this.clientService.fetchClients(),
      lawsuitDP: null,
    };
  }

  onClientSelected(client: Client): void {
    console.log(client);

    const lawsuitDP = this.clientService.fetchLawsuits({ id: client.id });

    this.setState({
      ...this.state,
      lawsuitDP,
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        <Select
          dataProvider={this.state.clientDP}
          keyAttribute="id"
          displayValue="name"
          onSelect={(client) => this.onClientSelected(client)}
        />
        <Table dataProvider={this.state.lawsuitDP} />
      </div>
    );
  }
}
