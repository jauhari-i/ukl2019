import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Tambah from "../Components/Tambah";

export default class NewPelanggaran extends Component {
  componentDidMount() {
    if (!localStorage.usertoken) {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <Tambah />
      </div>
    );
  }
}
