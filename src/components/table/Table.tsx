import React from "react";

type TableProps = {
  columns: Column[];
  rows: Row[];
};

export type Column = {
  id: number;
  name: string;
};

export type Row = {
  id: string;
  keys: string[];
  values: Record<string, any>;
};

type TableState = {
  columns: Column[];
  rows: Row[];
};

export default class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);

    this.state = {
      columns: props.columns,
      rows: props.rows,
    };
  }

  render(): React.ReactNode {
    return (
      <table role="table">
        <thead>
          <tr key="header">
            {this.props.columns.map((column) => (
              <th key={column.id}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.props.rows.map((row) => (
            <tr key={row.id}>
              {row.keys.map((key) => (
                <td key={key}>{row.values[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
