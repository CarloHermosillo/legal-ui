import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

export default class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Navbar />
        <div className="container text-center">
          <Outlet />
        </div>
      </>
    );
  }
}
