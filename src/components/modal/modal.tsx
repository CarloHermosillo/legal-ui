import React from "react";

type ModalProps = {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
};

export default class Modal extends React.Component<ModalProps> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: ModalProps) {
    super(props);
  }

  onClose(): void {
    this.props.onClose();
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
        <button onClick={this.props.onClose}>Close</button>
      </div>
    );
  }
}
