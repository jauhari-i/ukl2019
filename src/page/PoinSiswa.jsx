import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import PoinPanel from "../Components/PoinPanel";

export default class PoinSiswa extends Component {
  componentDidMount() {
    if (!localStorage.usertoken) {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
            <Navbar />
            <PoinPanel />
      </div>
    );
  }
}
