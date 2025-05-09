import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  test("render table", async () => {
    render(
      <Table
        columns={[
          { name: "column1", id: 1 },
          { name: "column2", id: 2 },
        ]}
        rows={[
          { keys: ["c1", "c2"], values: { c1: "field1", c2: "field2" }, id: "1" },
        ]}
      />
    );

    const elem = await screen.findByRole("table");

    expect(elem).not.toBeNull();
    expect(elem.textContent).toContain("field1");
  });
});
