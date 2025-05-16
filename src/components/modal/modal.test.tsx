import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Modal from "./modal";

describe("Modal", () => {
  it("should render children", () => {
    render(
      <Modal title="Test" onClose={jest.fn()}>
        <p>Test content</p>
      </Modal>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("should call onClose when button is clicked", async () => {
    const onClose = jest.fn();
    render(
      <Modal title="Test" onClose={onClose}>
        <p>Test content</p>
      </Modal>
    );

    const closeButton = await screen.findByRole("button");
    fireEvent.click(closeButton);

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  });
});
