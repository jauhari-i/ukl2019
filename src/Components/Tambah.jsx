import React, { Component } from "react";
import Footer from "./Footer";
import Axios from "axios";

export default class Tambah extends Component {
  state = {
    poin: [],
    siswa: [],
    pelanggaran: [],
    idSiswa: 0,
    idPelanggaran: 0,
    keterangan: "",
    petugas: []
  };
  getPoin() {
    Axios.get("/api/poin").then(res => {
      const data = res.data
      this.setState({ poin: data.poin });
    });
  }

  getPelanggaran() {
    Axios.get("/api/pelanggaran").then(res => {
      const data = res.data;
      this.setState({ pelanggaran: data.pelanggaran });
    });
  }

  getSiswa() {
    Axios.get("/api/siswa").then(res => {
      const data = res.data;
      this.setState({ siswa: data.siswa });
    });
  }

  componentDidMount() {
    this.getPelanggaran();
    this.getPoin();
    this.getSiswa();
    if (!localStorage.user) {
      Axios.get("/api/login/check", {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      }).then(res => {
        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));
      });
    } else {
      this.setState({ user: JSON.parse(localStorage.user) });
    }
  }

  onChangeHandler(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitPoin(e) {
    e.preventDefault();
    const date = "2019-12-10 00:00:00";
    console.log(date);
    Axios.post("/api/poin", {
      id_siswa: this.state.idSiswa,
      id_pelanggaran: this.state.idPelanggaran,
      keterangan: this.state.keterangan,
      tanggal: date,
      id_petugas: this.state.user.id
    }).then(res => {
      if (res.data.status === "1") {
        this.getPoin();
        this.setState({
          idSiswa: 0,
          idPelanggaran: 0,
          keterangan: ""
        });
      } else {
        console.log(res.data);
      }
    });
  }

  deletePoin(e, id) {
    e.preventDefault()
    Axios.delete(`/api/poin/${id}`).then(res => {
      if (res.data.status === "1") {
        this.getPoin();
      } else {
        this.getPoin();
        console.log(res.data);
      }
    })
  }
  render() {
    return (
      <div>
        <div class="container-fluid page-body-wrapper">
          <div class="main-panel">
            <div class="content-wrapper">
              <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-title float-left">
                        <b>Input Poin Siswa</b>
                      </p>
                      <p class="card-description float-right">
                        <a
                          href="#"
                          class="btn btn-sm btn-success btn-icon-text"
                          data-toggle="modal"
                          data-target="#modalDetail"
                        >
                          <i class="mdi mdi-plus btn-icon-prepend"></i>
                          Input Poin
                        </a>
                      </p>
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>Tanggal</th>
                              <th>Nama Siswa</th>
                              <th>Kelas</th>
                              <th>Kategori</th>
                              <th>Pelanggaran</th>
                              <th>Poin</th>
                              <th>Aksi</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.poin ? this.state.poin.map((item, i) => (
                              <tr key={i}>
                                <td>{item.tanggal}</td>
                                <td>{item.nama_siswa}</td>
                                <td>{item.kelas}</td>
                                <td>{item.kategori}</td>
                                <td>{item.nama_pelanggaran}</td>
                                <td>
                                <div className="badge badge-primary">{item.poin}</div></td>
                                <td>
                                  <button
                                    type="button"
                                    onClick={e => this.deletePoin(e,item.id)}
                                  class="btn btn-sm btn-danger btn-icon-text"
                                >
                                  <i class="mdi mdi-delete btn-icon-prepend"></i>
                                  Hapus
                                </button>
                                </td>
                              </tr>
                            )) : ''}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="modalDetail"
              tabindex="-1"
              role="dialog"
              aria-labelledby="ModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content modal-md">
                  <div class="modal-header">
                    <h5 class="modal-title" id="ModalLabel">
                      Input Poin Siswa
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={e => this.onSubmitPoin(e)}>
                      <div class="form-group">
                        <label for="id_siswa" class="col-form-label">
                          Nama Siswa
                        </label>
                        <select
                          class="form-control"
                          name="idSiswa"
                          value={this.state.idSiswa}
                          onChange={e => this.onChangeHandler(e)}
                          id="id_siswa"
                        >
                          {this.state.siswa
                            ? this.state.siswa.map((item, i) => (
                                <option value={item.id}>
                                  {item.nama_siswa}
                                </option>
                              ))
                            : ""}
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="id_pelanggaran" class="col-form-label">
                          Pelanggaran
                        </label>
                        <select
                          class="form-control"
                          name="idPelanggaran"
                          value={this.state.idPelanggaran}
                          onChange={e => this.onChangeHandler(e)}
                          id="id_pelanggaran"
                        >
                          {this.state.pelanggaran
                            ? this.state.pelanggaran.map((item, i) => (
                                <option value={item.id}>
                                  {item.nama_pelanggaran}
                                </option>
                              ))
                            : ""}
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="keterangan" class="col-form-label">
                          Keterangan
                        </label>
                        <input
                          type="text"
                          name="keterangan"
                          class="form-control"
                          id="keterangan"
                          value={this.state.keterangan}
                          onChange={e => this.onChangeHandler(e)}
                          placeholder="Keterangan"
                        />
                      </div>
                      <div class="form-group">
                        <button type="submit" class="btn btn-md btn-success">
                          Simpan
                        </button>
                        <button
                          type="button"
                          class="btn btn-md btn-light"
                          data-dismiss="modal"
                        >
                          Batal
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer"></div>
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
