import React, { Component } from "react";
import Footer from "./Footer";
import Axios from "axios";

export default class PoinPanel extends Component {
  state = {
    poin: [],
    poinDetail: [],
    cari: ""
  };
  search = e => {
    e.preventDefault();
    this.setState({
      cari: e.target.value,
      poin: this.state.poin.filter(data =>
        new RegExp(e.target.value, "i").exec(data.nama_siswa)
      )
    });
    if (e.target.value === "") {
      this.getPoin();
    }
  };
  getPoin() {
    Axios.get("/api/poin_siswa").then(res => {
      const data = res.data;
      this.setState({ poin: data.poin });
    });
  }
  componentDidMount() {
    this.getPoin();
  }
  detailId(e, id) {
    e.preventDefault();
    Axios.get(`/api/poin_siswa/${id}`).then(res => {
      const data = res.data;
      this.setState({
        poinDetail: data.detail
      });
      console.log(data);
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-title float-left">
                        <b>Data Poin Siswa</b>
                      </p>
                      <div className="table-responsive">
                        <input
                          type="text"
                          placeholder="Pencarian Siswa..."
                          onChange={this.search}
                          value={this.state.cari}
                          name="cari"
                          id="cari"
                          className="form-control"
                        />
                        <div className="dropdown-divider"></div>
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>NIS</th>
                              <th>Nama Siswa</th>
                              <th>Kelas</th>
                              <th>Total Poin</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.poin
                              ? this.state.poin.map((item, i) => (
                                  <tr>
                                    <td>{item.nis}</td>
                                    <td>{item.nama_siswa}</td>
                                    <td>{item.kelas}</td>
                                    <td>
                                      <div className="badge badge-primary">
                                        {item.total_poin}
                                      </div>
                                    </td>
                                    <td>
                                      <button
                                        onClick={e => this.detailId(e, item.id)}
                                        className="btn btn-sm btn-warning btn-icon-text"
                                        data-toggle="modal"
                                        data-target="#modalDetail"
                                      >
                                        <i className="mdi mdi-file-document-box-outline btn-icon-prepend"></i>
                                        Detail
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              : ""}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="modalDetail"
              tabindex="-1"
              role="dialog"
              aria-labelledby="ModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content modal-md">
                  <div className="modal-header">
                    <h5 className="modal-title" id="ModalLabel">
                      Detail Poin Siswa
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Tanggal</th>
                          <th>Pelanggaran</th>
                          <th>Kategori</th>
                          <th>Keterangan</th>
                          <th>Poin</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.poinDetail
                          ? this.state.poinDetail.map((item, i) => (
                              <tr key={i}>
                              <td>{item.tanggal}</td>
                              <td>{item.nama_pelanggaran}</td>
                              <td>{item.kategori}</td>
                              <td>{item.keterangan}</td>
                              <td>
                              <div className="badge badge-primary">{item.poin}</div>
                              </td>
                            </tr>
                            ))
                          : ""}
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
