import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./page/Login";
import Tatib from "./page/Tatib";
import Dashboard from "./page/Dashboard";
import Siswa from "./page/Siswa";
import Input from "./page/Input";
import NewPelanggaran from "./page/NewPelanggaran";
import PoinSiswa from "./page/PoinSiswa";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/tatib" component={Tatib} />
      <Route exact path="/siswa" component={Siswa} />
      <Route exact path="/pelanggaran" component={Input} />
      <Route exact path="/tambahpelanggaran" component={NewPelanggaran} />
      <Route exact path="/poin" component={PoinSiswa} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
