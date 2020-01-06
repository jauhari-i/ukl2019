import React, { Component } from "react";
import axios from "axios";

import Navbar from "../Components/Navbar";
import TatibPanel from "../Components/TatibPanel";

export default class Tatib extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petugas: []
    };
  }

  componentDidMount() {
    if (!localStorage.usertoken) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="container-scroller">
        <Navbar />
        <TatibPanel history={this.props.history} />
      </div>
    );
  }
}
