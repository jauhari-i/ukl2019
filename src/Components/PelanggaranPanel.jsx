import Footer from "./Footer";
import React, { Component } from 'react'
import Axios from "axios";

export default class PelanggaranPanel extends Component {
  state = {
    nama: '',
    kategori: '',
    poin: 0,
    idUpdate: 0,
    pelanggaran: []
  }

  getPelanggaran() {
    Axios.get('/api/pelanggaran').then(res => {
      const data = res.data
      this.setState({ pelanggaran: data })
    })
  }

  onChangeHandler(e) {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    this.getPelanggaran()
  }

  deleteP(e, id) {
    e.preventDefault()
    Axios.delete(`/api/pelanggaran/${id}`).then(res => {
      this.getPelanggaran()
    })
  }

  submitAdd(e){
    e.preventDefault()
    Axios.post('/api/pelanggaran', {
      nama_pelanggaran: this.state.nama,
      poin: this.state.poin,
      kategori: this.state.kategori
    }).then(res => {
      if (res.data.status === '1') {
        this.getPelanggaran()
        this.setState({
          nama: '',
          poin: '',
          kategori: ''
        })
      }else{
        console.log(res.data);
      }
    })
  }

  editP(e, data) {
    e.preventDefault()
    this.setState({
      nama: data.nama_pelanggaran,
      kategori: data.kategori,
      poin: data.poin,
      idUpdate: data.id
    })
  }

  submitEdit(e){
    e.preventDefault()
    Axios.put(`/api/pelanggaran/${this.state.idUpdate}`, {
      nama_pelanggaran: this.state.nama,
      kategori: this.state.kategori,
      poin: this.state.poin
    }).then(res => {
      if (res.data.status === '1') {
        this.getPelanggaran()
        this.setState({
          nama: '',
          kategori: '',
          poin: 0,
          idUpdate: 0,
        })
      } else {
        console.log(res.data);
      }
    })
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
                                {this.state.pelanggaran.pelanggaran ? 
                                  this.state.pelanggaran.pelanggaran.map((item, i) => (
                                    <tr key={i}>
                                      <td>{item.nama_pelanggaran}</td>
                                      <td>{item.kategori}</td>
                                      <td>{item.poin}</td>
                                      <td>
                                        <button
                                          onClick={e => this.editP(e,item)}
                                          className="btn btn-sm btn-info btn-icon-text"
                                          data-toggle="modal"
                                          data-target="#modalPelanggaranEdit"
                                        >
                                          <i className="mdi mdi-pencil btn-icon-prepend"></i>
                                          Ubah
                                        </button>
                                        <button onClick={e => this.deleteP(e, item.id)} className="btn btn-sm btn-danger btn-icon-text">
                                          <i className="mdi mdi-delete btn-icon-prepend"></i>
                                          Hapus
                                        </button>
                                      </td>
                                    </tr>
                                  ))
                                  : ''}
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
                            <form onSubmit={e => this.submitAdd(e)}>
                              <div className="form-group">
                                <label for="nama_pelanggaran" className="col-form-label">
                                  Nama Pelanggaran
                                </label>
                                <input
                                  type="text"
                                  name="nama"
                              value={this.state.nama}
                              onChange={e => this.onChangeHandler(e)}
                                  className="form-control"
                                  id="nama_pelanggaran"
                                  placeholder="Nama Pelanggaran"
                                />
                              </div>

                              <div className="form-group">
                                <label for="kategori" className="col-form-label">
                                  Kategori
                                </label>
                                <select className="form-control" onChange={e => this.onChangeHandler(e)} value={this.state.kategori} name="kategori" id="kategori">
                                  <option value="kerapian">
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
                              onChange={e => this.onChangeHandler(e)}
                              value={this.state.poin}
                                  type="number"
                                  name="poin"
                                  className="form-control"
                                  id="poin"
                                  placeholder="Jumlah Poin"
                                />
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn btn-md btn-success">
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
                      id="modalPelanggaranEdit"
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
                            <form onSubmit={e => this.submitEdit(e)}>
                              <div className="form-group">
                                <label for="nama_pelanggaran" className="col-form-label">
                                  Nama Pelanggaran
                                </label>
                                <input
                                  type="text"
                                  name="nama"
                              value={this.state.nama}
                              onChange={e => this.onChangeHandler(e)}
                                  className="form-control"
                                  id="nama_pelanggaran"
                                  placeholder="Nama Pelanggaran"
                                />
                              </div>

                              <div className="form-group">
                                <label for="kategori" className="col-form-label">
                                  Kategori
                                </label>
                                <select className="form-control" onChange={e => this.onChangeHandler(e)} value={this.state.kategori} name="kategori" id="kategori">
                                  <option value="kerapian">
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
                              onChange={e => this.onChangeHandler(e)}
                              value={this.state.poin}
                                  type="number"
                                  name="poin"
                                  className="form-control"
                                  id="poin"
                                  placeholder="Jumlah Poin"
                                />
                              </div>
                              <div className="form-group">
                                <button type="submit" className="btn btn-md btn-success">
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
                </div>                
            </div>
        )
    }
}
