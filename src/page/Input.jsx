import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import PelanggaranPanel from "../Components/PelanggaranPanel";

export default class Input extends Component {
  componentDidMount() {
    if (!localStorage.usertoken) {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <PelanggaranPanel />
      </div>
    );
  }
}
