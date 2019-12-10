import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import DashboardPanel from "../Components/DashboardPanel";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DashboardPanel />
      </div>
    );
  }
}
