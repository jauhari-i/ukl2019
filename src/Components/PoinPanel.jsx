import React, { Component } from "react";
import Footer from "./Footer";

export default class PoinPanel extends Component {
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
                      <p className="card-description float-right">
                        <a
                          href="#"
                          className="btn btn-sm btn-success btn-icon-text"
                          data-toggle="modal"
                          data-target="#modalDetail"
                        >
                          <i className="mdi mdi-plus btn-icon-prepend"></i>
                          Tambah
                        </a>
                      </p>
                      <div className="table-responsive">
                        <input
                          type="text"
                          placeholder="Pencarian Siswa..."
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
                            <tr>
                              <td>1234/12/23/20.09</td>
                              <td>Herman Beck Supriadi</td>
                              <td>X RPL 2</td>
                              <td>
                                <div className="badge badge-primary">100</div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-warning btn-icon-text"
                                  data-toggle="modal"
                                  data-target="#modalDetail"
                                >
                                  <i className="mdi mdi-file-document-box-outline btn-icon-prepend"></i>
                                  Detail
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>1234/12/23/20.09</td>
                              <td>John Abraham Sutanto</td>
                              <td>XII TKJ 4</td>
                              <td>
                                <div className="badge badge-primary">200</div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-warning btn-icon-text"
                                  data-toggle="modal"
                                  data-target="#modalDetail"
                                >
                                  <i className="mdi mdi-file-document-box-outline btn-icon-prepend"></i>
                                  Detail
                                </a>
                              </td>
                            </tr>
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
                        <tr>
                          <td>10/11/2019</td>
                          <td>Terlambat masuk sekolah</td>
                          <td>Kedisiplinan</td>
                          <td>Baru datang jam 07.00</td>
                          <td>
                            <div className="badge badge-primary">15</div>
                          </td>
                        </tr>
                        <tr>
                          <td>01/05/2019</td>
                          <td>Barang Ketinggalan</td>
                          <td>Kedisiplinan</td>
                          <td>Charger Ketinggalan</td>
                          <td>
                            <div className="badge badge-primary">10</div>
                          </td>
                        </tr>
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
