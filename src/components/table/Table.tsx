import React from "react";
import DataProvider, {
  FetchDataResult,
} from "../../utils/data-provider.ts/data-provider";
import { createRenderStrategyByType } from "../../utils/render/render-startegy";

/**
 * Properties of the Table component.
 *
 * @template K The type of key used to identify data.
 * @template V The type of value returned by the data provider.
 */
type TableProps<K, V> = {
  /**
   * The data provider to use for retrieving data.
   */
  dataProvider: DataProvider<K, V> | null;

  /**
   * An optional callback function that is called when a row is clicked.
   *
   * @param {Row<V>} row The row that was clicked.
   */
  onRowClick?: (row: Row<V>) => void;
};

/**
 * A column definition.
 */
type Column = {
  /**
   * The ID of the column.
   *
   * @type {number}
   */
  id: number;
  /**
   * The name of the column.
   *
   * @type {string}
   */
  name: string;
};

/**
 * A row in the table.
 *
 * @template V The type of value returned by the data provider.
 */
type Row<V> = {
  /**
   * The ID of the row.
   *
   * @type {string}
   */
  id: string;

  /**
   * The value of the row.
   *
   * @type {V}
   */
  value: V;
};

/**
 * The state of the Table component.
 *
 * @template V The type of value returned by the data provider.
 */
type TableState<V> = {
  /**
   * The columns of the table.
   *
   * @type {Column[]}
   */
  columns: Column[];

  /**
   * The rows of the table.
   *
   * @type {Row<V>[]}
   */
  rows: Row<V>[];
};

/**
 * The Table component.
 *
 * @template K The type of key used to identify data.
 * @template V The type of value returned by the data provider.
 */
export default class Table<K, V> extends React.Component<
  TableProps<K, V>,
  TableState<V>
> {
  constructor(props: TableProps<K, V>) {
    super(props);

    this.state = {
      columns: [],
      rows: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const results = await this.fetchFromDataProvider();

    if (!results) return;

    this.setState(results);
  }

  async componentDidUpdate<K, V>(
    props: TableProps<K, V>,
    state: TableState<V>
  ): Promise<void> {
    if (props.dataProvider === this.props.dataProvider) return;

    this.componentDidMount();
  }

  private onRowClick(row: Row<V>) {
    console.log(row);
    this.props.onRowClick?.(row);
  }

  private async fetchFromDataProvider(): Promise<TableState<V> | null> {
    const data: FetchDataResult<K, V> | undefined =
      await this.props.dataProvider?.fetchData();

    const results = data?.results;

    if (!results || results.length === 0) {
      return null;
    }

    const headers = Object.keys(data.results[0] as object);

    return {
      rows: data.results.map((result, i) => ({
        id: i.toString(),
        value: result,
      })),
      columns: headers.map((h, i) => ({ id: i, name: h })),
    };
  }

  render(): React.ReactNode {
    return (
      <table role="table" className="table">
        <thead>
          <tr key="header">
            {this.state.columns.map((column) => (
              <th scope="col" key={column.id}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.rows.map((row) => (
            <tr key={row.id} onClick={() => this.onRowClick(row)}>
              {Object.values(row.value as object).map((value, i) => (
                <td key={i}>
                  {createRenderStrategyByType(typeof value).render(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
