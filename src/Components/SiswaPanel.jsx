import React, { Component } from "react";
import Footer from "./Footer";

export default class SiswaPanel extends Component {
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
                        <b>Data Siswa</b>
                      </p>
                      <p className="card-description float-right">
                        <a
                          href="#"
                          className="btn btn-sm btn-success btn-icon-text"
                          data-toggle="modal"
                          data-target="#modalSiswa"
                        >
                          <i className="mdi mdi-plus btn-icon-prepend"></i>
                          Tambah
                        </a>
                      </p>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>NIS</th>
                              <th>Nama Siswa</th>
                              <th>Kelas</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1234/12/23/20.09</td>
                              <td>Herman Beck Supriadi</td>
                              <td>X RPL 2</td>
                              <td>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-info btn-icon-text"
                                  data-toggle="modal"
                                  data-target="#modalSiswa"
                                >
                                  <i className="mdi mdi-pencil btn-icon-prepend"></i>
                                  Ubah
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-danger btn-icon-text"
                                >
                                  <i className="mdi mdi-delete btn-icon-prepend"></i>
                                  Hapus
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>1234/12/23/20.09</td>
                              <td>John Abraham Sutanto</td>
                              <td>XII TKJ 4</td>
                              <td>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-info btn-icon-text"
                                  data-toggle="modal"
                                  data-target="#modalSiswa"
                                >
                                  <i className="mdi mdi-pencil btn-icon-prepend"></i>
                                  Ubah
                                </a>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-danger btn-icon-text"
                                >
                                  <i className="mdi mdi-delete btn-icon-prepend"></i>
                                  Hapus
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
              id="modalSiswa"
              tabindex="-1"
              role="dialog"
              aria-labelledby="ModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="ModalLabel">
                      Form Siswa
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
                    <form>
                      <div className="form-group">
                        <label for="nis" className="col-form-label">
                          NIS
                        </label>
                        <input
                          type="text"
                          name="nis"
                          className="form-control"
                          id="nis"
                          placeholder="Nomor Induk Siswa"
                        />
                      </div>
                      <div className="form-group">
                        <label for="nama" className="col-form-label">
                          Nama Siswa
                        </label>
                        <input
                          type="text"
                          name="nama"
                          className="form-control"
                          id="nama"
                          placeholder="Nama Lengkap"
                        />
                      </div>
                      <div className="form-group">
                        <label for="kelas" className="col-form-label">
                          Kelas
                        </label>
                        <select className="form-control" name="kelas" id="kelas">
                          <option value="1" checked>
                            X RPL 1
                          </option>
                          <option value="2">X RPL 2</option>
                          <option value="3">X RPL 3</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button type="button" className="btn btn-md btn-success">
                          Simpan
                        </button>
                        <button
                          type="button"
                          className="btn btn-md btn-light"
                          data-dismiss="modal"
                        >
                          Batal
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
