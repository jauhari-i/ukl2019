import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="horizontal-menu">
          <nav className="navbar top-navbar col-lg-12 col-12 p-0">
            <div className="nav-top flex-grow-1">
              <div className="container d-flex flex-row h-100 align-items-center">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                  <a className="navbar-brand brand-logo" href="index.html">
                    <img src="./assets/img/logo.svg" alt="logos" />
                  </a>
                  <a className="navbar-brand brand-logo-mini" href="index.html">
                    <img src="./assets/img/logo.svg" alt="logos" />
                  </a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
                  <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        id="profileDropdown"
                      >
                        Hi, Admin
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right navbar-dropdown"
                        aria-labelledby="profileDropdown"
                      >
                        <a className="dropdown-item">
                          <i className="mdi mdi-logout text-primary"></i>
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                  <button
                    className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                    type="button"
                    data-toggle="horizontal-menu-toggle"
                  >
                    <span className="mdi mdi-menu"></span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <nav className="bottom-navbar">
            <div className="container">
              <ul className="nav page-navigation">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="mdi mdi-view-dashboard-outline menu-icon"></i>
                    <span className="menu-title">Beranda</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tatib">
                    <i className="mdi mdi-account-settings menu-icon"></i>
                    <span className="menu-title">Petugas Tatib</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/siswa">
                    <i className="mdi mdi-file-document-box-outline menu-icon"></i>
                    <span className="menu-title">Data Siswa</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pelanggaran" className="nav-link">
                    <i className="mdi mdi-codepen menu-icon"></i>
                    <span className="menu-title">Pelanggaran</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tambahpelanggaran" className="nav-link">
                    <i className="mdi mdi-puzzle-outline menu-icon"></i>
                    <span className="menu-title">Input Pelanggaran</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/poin" className="nav-link">
                    <i className="mdi mdi-image-filter menu-icon"></i>
                    <span className="menu-title">Poin Siswa</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
