import React from "react";
import { Link, Outlet } from "react-router-dom";

export default class Layout extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/lawsuits">Lawsuits</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    );
  }
}