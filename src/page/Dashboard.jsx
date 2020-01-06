import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import DashboardPanel from "../Components/DashboardPanel";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statistik: [],
      tertinggi: [],
      user: []
    };
  }

  componentDidMount() {
    if (!localStorage.usertoken) {
      this.props.history.push("/login");
    } else {
      this.getStats();
      this.getTertinggi();
    }
  }

  async getStats() {
    await axios.get("/api/beranda/statistik").then(res => {
      this.setState({ statistik: res.data });
    });
  }

  async getTertinggi() {
    await axios.get("/api/beranda/poin_tertinggi").then(res => {
      this.setState({ tertinggi: res.data.data });
    });
  }
  render() {
    return (
      <div>
        <Navbar />
        <DashboardPanel
          stats={this.state.statistik}
          top={this.state.tertinggi}
        />
      </div>
    );
  }
}
