import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import TatibPanel from "../Components/TatibPanel";

export default class Tatib extends Component {
  render() {
    return (
      <div className="container-scroller">
        <Navbar />
        <TatibPanel />
      </div>
    );
  }
}
