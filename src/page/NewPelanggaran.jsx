import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Tambah from "../Components/Tambah";

export default class NewPelanggaran extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Tambah />
      </div>
    );
  }
}
