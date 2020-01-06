import React, { Component } from "react";
import Footer from "./Footer";
import Axios from "axios";
import $ from 'jquery'

export default class TatibPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      nama: "",
      role: "",
      password: "",
      petugas: [],
      success: 0,
      error: 0,
      msg: '',
      idToUpdate: 0,
    };
  }

  componentDidMount() {
    this.getPetugas()
  }
  async getPetugas() {
    await Axios.get("/api/petugas").then(res => {
      console.log(res.data);
      this.setState({ petugas: res.data, });
    });
  }

  closeAlert(e) {
    this.setState({
      msg: '',
      success:0,
      error: 0
    })
  }

  deletePetugas(e, id) {
    e.preventDefault()
    Axios.delete(`/api/petugas/${id}`).then(res => {
      console.log(res.data);
      if (res.data.status === 1) {
        this.getPetugas()
      } else {
      }
    })
  }

  onChangeModalPetugas(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmitForm(e) {
    e.preventDefault();
    Axios.post("/api/petugas", {
      name: this.state.nama,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }).then(res => {
      if (res.data.status == 1) {
        this.setState({
          email: "",
          nama: "",
          role: "",
          password: "",
          msg: res.data.message,
          success: 1,
          error: 0
        });
        this.getPetugas()
      } else {
        this.setState({
          msg: res.data.message,
          success: 0,
          error: 1,
        })
      }
    });
  }

  editTatib(e,data) {
    e.preventDefault()
    this.setState({
      idToUpdate: data.id,
      email: data.email,
      nama: data.name,
      password: '',
      role: data.role
    })
  }

  onSubmitFormEdit(e) {
    e.preventDefault()
    Axios.put(`/api/petugas/${this.state.idToUpdate}`, {
      name: this.state.nama,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }).then(res => {
      if (res.data.status === 1) {
        this.setState({
          nama: '',
          email: '',
          password: '',
          role: '',
          idToUpdate: 0
        })
        this.getPetugas()
      }else{
        this.getPetugas()
      }
    })
  }
  render() {
    const userp = this.state.petugas.user
    const noData = (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
    const successAlert = (
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <button type="button" className="close" onClick={e => this.closeAlert(e)}>
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>{this.state.msg}
      </div>
    )

    const errorAlert = (
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
        <button type="button" className="close" onClick={e => this.closeAlert(e)}>
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>{this.state.msg}
      </div>
    )
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
                            {userp ? 
                              userp.map((item, i) => (
                                <tr key={i}>
                                  <td>{item.email}</td>
                                  <td>{item.name}</td>
                                  <td>{item.role}</td>
                                  <td>
                                <button
                                  className="btn btn-sm btn-info btn-icon-text"
                                  data-toggle="modal"
                                      data-target="#modal"
                                      onClick={e => this.editTatib(e,item)}
                                >
                                  <i className="mdi mdi-pencil btn-icon-prepend"></i>
                                  Ubah
                                </button>
                                    <button
                                      onClick={e => this.deletePetugas(e,item.id)}
                                  className="btn btn-sm btn-danger btn-icon-text"
                                >
                                  <i className="mdi mdi-delete btn-icon-prepend"></i>
                                  Hapus
                                </button>
                              </td>
                                </tr>
                              ))  
                            : noData}
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
                    {this.state.success ? successAlert : ''}
                    {this.state.error ? errorAlert : ''}
                    <form onSubmit={e => this.onSubmitForm(e)}>
                      <div className="form-group">
                        <label for="email" className="col-form-label">
                          E-Mail
                        </label>
                        <input
                          onChange={e => this.onChangeModalPetugas(e)}
                          type="email"
                          name="email"
                          value={this.state.email}
                          className="form-control"
                          id="email"
                          placeholder="E-Mail"
                        />
                      </div>
                      <div className="form-group">
                        <label for="password" className="col-form-label">
                          Password
                        </label>
                        <input
                          onChange={e => this.onChangeModalPetugas(e)}
                          type="password"
                          name="password"
                          value={this.state.password}
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label for="nama" className="col-form-label">
                          Nama Petugas
                        </label>
                        <input
                          onChange={e => this.onChangeModalPetugas(e)}
                          type="text"
                          name="nama"
                          value={this.state.nama}
                          className="form-control"
                          id="nama"
                          placeholder="Nama Petugas"
                        />
                      </div>
                      <div className="form-group">
                        <label for="role" className="col-form-label">
                          Role
                        </label>
                        <select
                          className="form-control"
                          onChange={e => this.onChangeModalPetugas(e)}
                          name="role"
                          id="role"
                        >
                          <option value="admin" selected>
                            Admin
                          </option>
                          <option value="petugas">Petugas</option>
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
                          id="closeButton"
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
              id="modal"
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
                    {this.state.success ? successAlert : ''}
                    {this.state.error ? errorAlert : ''}
                    <form onSubmit={e => this.onSubmitFormEdit(e)}>
                      <div className="form-group">
                        <label for="email" className="col-form-label">
                          E-Mail
                        </label>
                        <input
                          onChange={e => this.onChangeModalPetugas(e)}
                          type="email"
                          name="email"
                          value={this.state.email}
                          className="form-control"
                          id="email"
                          disabled
                          placeholder="E-Mail"
                        />
                      </div>
                      <div className="form-group">
                        <label for="password" className="col-form-label">
                          Password
                        </label>
                        <input
                          onChange={e => this.onChangeModalPetugas(e)}
                          type="password"
                          name="password"
                          value={this.state.password}
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group">
                        <label for="nama" className="col-form-label">
                          Nama Petugas
                        </label>
                        <input
                          onChange={e => this.onChangeModalPetugas(e)}
                          type="text"
                          name="nama"
                          value={this.state.nama}
                          className="form-control"
                          id="nama"
                          placeholder="Nama Petugas"
                        />
                      </div>
                      <div className="form-group">
                        <label for="role" className="col-form-label">
                          Role
                        </label>
                        <select
                          className="form-control"
                          onChange={e => this.onChangeModalPetugas(e)}
                          name="role"
                          id="role"
                        >
                          <option value="admin" selected>
                            Admin
                          </option>
                          <option value="petugas">Petugas</option>
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
                          id="closeButton"
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
