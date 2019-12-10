import React, { Component } from "react";
import Footer from "./Footer";

export default class TatibPanel extends Component {
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
                        <b>Data Petugas Tatib</b>
                      </p>
                      <p className="card-description float-right">
                        <a
                          href="#"
                          className="btn btn-sm btn-success btn-icon-text"
                          data-toggle="modal"
                          data-target="#modalTatib"
                        >
                          <i className="mdi mdi-plus btn-icon-prepend"></i>
                          Tambah
                        </a>
                      </p>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Email</th>
                              <th>Nama Petugas</th>
                              <th>Role</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>admin@smktelkom-mlg.sch.id</td>
                              <td>Abdullah Sutejo Rahman</td>
                              <td>
                                <div className="badge badge-warning">admin</div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-info btn-icon-text"
                                  data-toggle="modal"
                                  data-target="#modalTatib"
                                >
                                  <i className="mdi mdi-pencil btn-icon-prepend"></i>
                                  Ubah
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-danger btn-icon-text"
                                >
                                  <i className="mdi mdi-delete btn-icon-prepend"></i>
                                  Hapus
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>sisworoso@smktelkom-mlg.sch.id</td>
                              <td>Sisworoso</td>
                              <td>
                                <div className="badge badge-warning">
                                  petugas
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="btn btn-sm btn-info btn-icon-text"
                                  data-toggle="modal"
                                  data-target="#modalTatib"
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
              id="modalTatib"
              tabindex="-1"
              role="dialog"
              aria-labelledby="ModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="ModalLabel">
                      Form Petugas
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
                          E-Mail
                        </label>
                        <input
                          type="text"
                          name="nis"
                          className="form-control"
                          id="nis"
                          placeholder="E-Mail"
                        />
                      </div>
                      <div className="form-group">
                        <label for="nama" className="col-form-label">
                          Nama Petugas
                        </label>
                        <input
                          type="text"
                          name="nama"
                          className="form-control"
                          id="nama"
                          placeholder="Nama Petugas"
                        />
                      </div>
                      <div className="form-group">
                        <label for="kelas" className="col-form-label">
                          Role
                        </label>
                        <select className="form-control" name="role" id="role">
                          <option value="admin" checked>
                            Admin
                          </option>
                          <option value="petugas">Petugas</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button
                          type="button"
                          className="btn btn-md btn-success"
                        >
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
