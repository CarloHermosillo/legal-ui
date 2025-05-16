import React, { Key } from "react";
import DataProvider from "../../utils/data-provider.ts/data-provider";

type Props<K, V> = {
  dataProvider: DataProvider<K, V>;
  keyAttribute: K;
  displayValue: string;
  onSelect?: (item: V) => void;
};

type State<V> = {
  data: V[];
  selectedValue: string;
  filter?: string;
};

export default class Select<K, V> extends React.Component<
  Props<K, V>,
  State<V>
> {
  constructor(props: Props<K, V>) {
    super(props);

    this.state = {
      data: [],
      selectedValue: "Select...",
    };
  }

  async componentDidMount(): Promise<void> {
    const data = await this.props.dataProvider.fetchData();

    const results = data.results;

    if (!results || results.length === 0) {
      return;
    }

    this.setState({
      data: data.results,
    });
  }

  onSelectedItem(item: V): void {
    const value = item[this.props.displayValue as keyof typeof item];

    this.setState({ ...this.state, selectedValue: value as string });

    this.props.onSelect?.(item);
  }

  render(): React.ReactNode {
    return (
      <div className="dropdown bg-white">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {this.state.selectedValue}
        </button>
        <ul className="dropdown-menu w-25">
          <li>
            <input
              className="form-control"
              type="text"
              placeholder="Type to filter..."
              value={this.state.filter}
              onChange={(event) =>
                this.setState({
                  ...this.state,
                  filter: event.target.value,
                })
              }
            ></input>
          </li>
          {this.state.data.map((item) => (
            <li key={item[this.props.keyAttribute as keyof typeof item] as Key}>
              <button
                className="dropdown-item"
                onClick={() => this.onSelectedItem(item)}
              >
                {
                  item[
                    this.props.displayValue as keyof typeof item
                  ] as React.ReactNode
                }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
