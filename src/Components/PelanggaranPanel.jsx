import Footer from "./Footer";
import React, { Component } from 'react'

export default class PelanggaranPanel extends Component {
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
                <b>Data Master Pelanggaran</b>
              </p>
              <p className="card-description float-right">
                <a
                  href="#"
                  className="btn btn-sm btn-success btn-icon-text"
                  data-toggle="modal"
                  data-target="#modalPelanggaran"
                >
                  <i className="mdi mdi-plus btn-icon-prepend"></i>
                  Tambah
                </a>
              </p>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Nama Pelanggaran</th>
                      <th>Kategori</th>
                      <th>Poin</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Terlambat masuk sekolah</td>
                      <td>Kedisiplinan</td>
                      <td>15</td>
                      <td>
                        <a
                          href="#"
                          className="btn btn-sm btn-info btn-icon-text"
                          data-toggle="modal"
                          data-target="#modalPelanggaran"
                        >
                          <i className="mdi mdi-pencil btn-icon-prepend"></i>
                          Ubah
                        </a>
                        <a href="#" className="btn btn-sm btn-danger btn-icon-text">
                          <i className="mdi mdi-delete btn-icon-prepend"></i>
                          Hapus
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Barang ketinggalan</td>
                      <td>Kerajinan</td>
                      <td>10</td>
                      <td>
                        <a
                          href="#"
                          className="btn btn-sm btn-info btn-icon-text"
                          data-toggle="modal"
                          data-target="#modalPelanggaran"
                        >
                          <i className="mdi mdi-pencil btn-icon-prepend"></i>
                          Ubah
                        </a>
                        <a href="#" className="btn btn-sm btn-danger btn-icon-text">
                          <i className="mdi mdi-delete btn-icon-prepend"></i>
                          Hapus
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Tidak memakai seragam sesuai ketentuan</td>
                      <td>Kerapian</td>
                      <td>10</td>
                      <td>
                        <a
                          href="#"
                          className="btn btn-sm btn-info btn-icon-text"
                          data-toggle="modal"
                          data-target="#modalPelanggaran"
                        >
                          <i className="mdi mdi-pencil btn-icon-prepend"></i>
                          Ubah
                        </a>
                        <a href="#" className="btn btn-sm btn-danger btn-icon-text">
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
      id="modalPelanggaran"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              Form Data Pelanggaran
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
                <label for="nama_pelanggaran" className="col-form-label">
                  Nama Pelanggaran
                </label>
                <input
                  type="text"
                  name="nama_pelanggaran"
                  className="form-control"
                  id="nama_pelanggaran"
                  placeholder="Nama Pelanggaran"
                />
              </div>

              <div className="form-group">
                <label for="kategori" className="col-form-label">
                  Kategori
                </label>
                <select className="form-control" name="kategori" id="kategori">
                  <option value="kerapian" checked>
                    Kerapian
                  </option>
                  <option value="kedisiplinan">Kedisiplinan</option>
                  <option value="kerajinan">Kerajinan</option>
                </select>
              </div>
              <div className="form-group">
                <label for="poin" className="col-form-label">
                  Poin
                </label>
                <input
                  type="number"
                  name="poin"
                  className="form-control"
                  id="poin"
                  placeholder="Jumlah Poin"
                />
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
    <Footer />
  </div>
</div>;
                
            </div>
        )
    }
}
