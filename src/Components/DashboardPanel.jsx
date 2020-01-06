import React, { Component } from "react";
import Footer from "./Footer";

export default class DashboardPanel extends Component {
  render() {
    const { stats, top } = this.props;
    const maps = {};
    const noData = (
      <div className="list d-flex align-items-center border-bottom pb-3">
        <div className="wrapper w-100">
          <p>
            <b>Tidak ada data pelanggaran</b>
          </p>
        </div>
      </div>
    );
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
                          <h2 className="mb-0">{stats.jml_siswa}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                      <div className="card bg-gradient-warning text-white text-center card-shadow-warning">
                        <div className="card-body">
                          <h6 className="font-weight-normal">Data Petugas</h6>
                          <h2 className="mb-0">{stats.jml_petugas}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                      <div className="card bg-gradient-danger text-white text-center card-shadow-danger">
                        <div className="card-body">
                          <h6 className="font-weight-normal">
                            Data Pelanggaran
                          </h6>
                          <h2 className="mb-0">{stats.jml_data_pelanggaran}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                      <div className="card bg-gradient-success text-white text-center card-shadow-success">
                        <div className="card-body">
                          <h6 className="font-weight-normal">
                            Siswa Melanggar Hari Ini
                          </h6>
                          <h2 className="mb-0">{stats.pelanggaran_hari_ini}</h2>
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
                      {top
                        ? top.map((item, i) => (
                            <div key={i}>
                              <div class="list d-flex align-items-center border-bottom pb-3">
                                <div class="wrapper w-100">
                                  <p>
                                    <b>{item.nama_siswa}</b>{" "}
                                    <span class="badge badge-danger ml-2">
                                      {item.total_poin}
                                    </span>
                                  </p>
                                  <small class="text-muted">{item.kelas}</small>
                                </div>
                              </div>
                            </div>
                          ))
                        : noData}
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
