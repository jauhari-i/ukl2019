import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      msg: ""
    };
  }

  onChangeFunction(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    axios
      .get("http://10.5.7.3:8000/api/siswa", {
        headers: {
          "Content-Type": "application/octet-stream",
          "Access-Control-Allow-Origin": false
        }
      })
      .then(res => console.log(res));
  }

  loginSubmit(e) {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState({ msg: "Tolong isi semua data" });
    } else {
    }
  }
  render() {
    return (
      <div>
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="main-panel">
              <div className="content-wrapper d-flex align-items-center auth">
                <div className="row w-100">
                  <div className="col-lg-4 mx-auto">
                    <div className="auth-form-light text-left p-5">
                      <div className="navbar-brand brand-logo">
                        <img src="./assets/img/logo.svg" alt="img" />
                      </div>
                      <h4>Selamat datang!</h4>
                      <h6 className="font-weight-light">
                        Login untuk mengelola poin pelanggaran siswa.
                      </h6>
                      <form
                        className="pt-3"
                        onSubmit={e => this.loginSubmit(e)}
                      >
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                              <span className="input-group-text bg-transparent border-right-0">
                                <i className="mdi mdi-account-outline text-primary"></i>
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control form-control-lg border-left-0"
                              id="email"
                              onChange={e => this.onChangeFunction(e)}
                              name="email"
                              placeholder="E-Mail"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                              <span className="input-group-text bg-transparent border-right-0">
                                <i className="mdi mdi-lock-outline text-primary"></i>
                              </span>
                            </div>
                            <input
                              type="password"
                              className="form-control form-control-lg border-left-0"
                              name="password"
                              id="password"
                              onChange={e => this.onChangeFunction(e)}
                              placeholder="Kata Sandi"
                              required
                            />
                          </div>
                        </div>
                        <div className="my-3">
                          <button
                            type="submit"
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          >
                            Masuk
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
