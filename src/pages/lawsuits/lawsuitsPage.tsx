import React from "react";
import Table, { Column, Row } from "../../components/table/Table";
import LawsuitsService from "../../services/lawsuitsService";
import Lawsuit from "../../domain/lawsuit";

type Props = { service: LawsuitsService };
type State = { lawsuits: Lawsuit[], rows: Row[] };

export default class LawsuitsPage extends React.Component<Props, State> {

  private readonly service: LawsuitsService;
  private readonly columns: Column[] = [{  id: 1, name: 'topic' }, {  id: 2, name: 'fee' }, {  id: 3, name: 'payed' }, {  id: 4, name: 'lawsuitType' }];

  constructor(props: Props) {
    super(props);

    this.service = props.service;
    this.state = { lawsuits: [], rows: [] };

  }

  async componentDidMount(): Promise<void> {
    const lawsuits = await this.service.fetchLawsuits();

    let rows: Row[] = [];

    for (const lawsuit of lawsuits) {
      const keys = Object.keys(lawsuit).filter(k => k !== 'client' && k !== 'id');

      rows.push({ id: lawsuit.id, keys, values: lawsuit });
    }

    this.setState({ lawsuits, rows });
  }

  render(): React.ReactNode {
    return (
      <Table
        columns={ this.columns }
        rows={ this.state.rows }
      />
    )
  }
}