import React, { Component } from "react";
import Footer from "./Footer";

export default class DashboardPanel extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                      <div className="card bg-gradient-primary text-white text-center card-shadow-primary">
                        <div className="card-body">
                          <h6 className="font-weight-normal">Data Siswa</h6>
                          <h2 className="mb-0">1450</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                      <div className="card bg-gradient-warning text-white text-center card-shadow-warning">
                        <div className="card-body">
                          <h6 className="font-weight-normal">Data Petugas</h6>
                          <h2 className="mb-0">8</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                      <div className="card bg-gradient-danger text-white text-center card-shadow-danger">
                        <div className="card-body">
                          <h6 className="font-weight-normal">
                            Data Pelanggaran
                          </h6>
                          <h2 className="mb-0">120</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                      <div className="card bg-gradient-success text-white text-center card-shadow-success">
                        <div className="card-body">
                          <h6 className="font-weight-normal">
                            Siswa Melanggar Hari Ini
                          </h6>
                          <h2 className="mb-0">12</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h6 className="card-title">
                          <i className="mdi mdi-finance menu-icon"></i> Poin
                          Tertinggi
                        </h6>
                      </div>
                      <div className="list d-flex align-items-center border-bottom pb-3">
                        <div className="wrapper w-100">
                          <p>
                            <b>George Bambang Prakoso</b>{" "}
                            <span className="badge badge-danger">300</span>
                          </p>
                          <small className="text-muted">XI RPL 2</small>
                        </div>
                      </div>
                      <div className="list d-flex align-items-center border-bottom py-3">
                        <div className="wrapper w-100">
                          <p>
                            <b>John Fikri Santoso</b>{" "}
                            <span className="badge badge-danger">280</span>
                          </p>
                          <small className="text-muted">XII TKJ 3</small>
                        </div>
                      </div>
                      <div className="list d-flex align-items-center border-bottom py-3">
                        <div className="wrapper w-100">
                          <p>
                            <b>Peter Sudarmono Pambudi</b>{" "}
                            <span className="badge badge-danger">260</span>
                          </p>
                          <small className="text-muted">X RPL 6</small>
                        </div>
                      </div>
                      <div className="list d-flex align-items-center border-bottom py-3">
                        <div className="wrapper w-100">
                          <p>
                            <b>Nateila Ayu Rahmawati</b>{" "}
                            <span className="badge badge-danger">200</span>
                          </p>
                          <small className="text-muted">X TKJ 2</small>
                        </div>
                      </div>
                      <div className="list d-flex align-items-center pt-3">
                        <div className="wrapper w-100">
                          <p>
                            <b>Ahmad Tom Jerry</b>{" "}
                            <span className="badge badge-danger">187</span>
                          </p>
                          <small className="text-muted">3 hours ago</small>
                        </div>
                      </div>
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
