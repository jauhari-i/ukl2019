import React, { Component } from "react";
import Footer from "./Footer";
import Axios from "axios";

export default class SiswaPanel extends Component {
  state = {
    siswa: [],
    nis: "",
    nama: "",
    kelas: "",
    idUpdate: 0,
  };
  onChangeHandler(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  getSiswa() {
    Axios.get("/api/siswa").then(res => {
      this.setState({ siswa: res.data });
    });
  }
  componentDidMount() {
    this.getSiswa();
  }

  deleteSiswa(e, id) {
    e.preventDefault();
    Axios.delete(`/api/siswa/${id}`).then(res => {
      if (res.data.status === 1) {
        this.getSiswa();
      } else {
        this.getSiswa();
      }
    });
  }

  EditSiswa(e, data) {
    e.preventDefault()
    this.setState({
      nama: data.nama_siswa,
      kelas: data.kelas,
      nis: data.nis,
      idUpdate: data.id
    })
  }

  onSubmitEditSiswa(e) {
    e.preventDefault()
    Axios.put(`/api/siswa/${this.state.idUpdate}`, {
      nama_siswa: this.state.nama,
      nis: this.state.nis,
      kelas: this.state.kelas
    }).then(res => {
      if (res.data.status === "1") {
        this.setState({
          idUpdate: 0,
          nama: '',
          nis: '',
          kelas: ''
        })
        this.getSiswa()
      } else {
        // this.getSiswa()
        console.log(res.data);
      }
    })
  }

  onSubmitAddSiswa(e) {
    e.preventDefault()
    Axios.post('/api/siswa', {
      nama_siswa: this.state.nama,
      kelas: this.state.kelas,
      nis: this.state.nis
    }).then(res => {
      console.log(res);
      if (res.data.status === "1") {
        this.setState({
          nama: '',
          kelas: '',
          nis: '',
        })
        this.getSiswa()

      } else {
        this.getSiswa()
      }
    })
  }
  render() {
    const siswa = this.state.siswa;
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
                            {siswa.siswa
                              ? siswa.siswa.map((item, i) => (
                                  <tr key={i}>
                                    <td>{item.nis}</td>
                                    <td>{item.nama_siswa}</td>
                                    <td>{item.kelas}</td>
                                    <td>
                                      <button
                                        onClick={e => this.EditSiswa(e, item)}
                                        className="btn btn-sm btn-info btn-icon-text"
                                        data-toggle="modal"
                                        data-target="#modalSiswaEdit"
                                      >
                                        <i className="mdi mdi-pencil btn-icon-prepend"></i>
                                        Ubah
                                      </button>
                                      <button
                                        onClick={e =>
                                          this.deleteSiswa(e, item.id)
                                        }
                                        className="btn btn-sm btn-danger btn-icon-text"
                                      >
                                        <i className="mdi mdi-delete btn-icon-prepend"></i>
                                        Hapus
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
                    <form onSubmit={e => this.onSubmitAddSiswa(e)}>
                      <div className="form-group">
                        <label for="nis" className="col-form-label">
                          NIS
                        </label>
                        <input
                          type="text"
                          name="nis"
                          className="form-control"
                          id="nis"

                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.nis}
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
                          onChange={e=> this.onChangeHandler(e)}
                          value={this.state.nama}
                          placeholder="Nama Lengkap"
                        />
                      </div>
                      <div className="form-group">
                        <label for="kelas" className="col-form-label">
                          Kelas
                        </label>
                        <select
                          className="form-control"
                          name="kelas"
                          id="kelas"
                          onChange={ e=> this.onChangeHandler(e)}
                          value={this.state.kelas}
                        >
                          <option value="1">
                            X RPL 1
                          </option>
                          <option value="2">X RPL 2</option>
                          <option value="3">X RPL 3</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
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
            <div
              className="modal fade"
              id="modalSiswaEdit"
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
                    <form onSubmit={e => this.onSubmitEditSiswa(e)}>
                      <div className="form-group">
                        <label for="nis" className="col-form-label">
                          NIS
                        </label>
                        <input
                          type="text"
                          name="nis"
                          className="form-control"
                          id="nis"

                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.nis}
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
                          onChange={e=> this.onChangeHandler(e)}
                          value={this.state.nama}
                          placeholder="Nama Lengkap"
                        />
                      </div>
                      <div className="form-group">
                        <label for="kelas" className="col-form-label">
                          Kelas
                        </label>
                        <select
                          className="form-control"
                          name="kelas"
                          id="kelas"
                          onChange={ e=> this.onChangeHandler(e)}
                          value={this.state.kelas}
                        >
                          <option value="1">
                            X RPL 1
                          </option>
                          <option value="2">X RPL 2</option>
                          <option value="3">X RPL 3</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
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
