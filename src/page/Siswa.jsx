import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import SiswaPanel from "../Components/SiswaPanel";

export default class Siswa extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SiswaPanel />
      </div>
    );
  }
}
