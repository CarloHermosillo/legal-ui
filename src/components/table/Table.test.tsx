import { render, screen } from "@testing-library/react";
import Table from "./Table";
import ArrayDataProvider from "../../utils/data-provider.ts/impl/array-data-provider";

describe("Table", () => {
  test("render table", async () => {
    const dp = new ArrayDataProvider<number, any>({
      data: [
        { id: "1", c1: "field1", c2: "field2" },
        { id: "2", c1: "field3", c2: "field4" },
      ],
      keyAttribute: "id",
    });

    render(<Table dataProvider={dp} />);

    const elem = await screen.findByRole("table");

    expect(elem).not.toBeNull();
    expect(elem.textContent).toContain("field1");
  });
});
