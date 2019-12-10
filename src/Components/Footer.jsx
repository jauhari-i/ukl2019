import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="w-100 clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
              Copyright © 2019 <Link to="/">Moklet</Link>. All rights reserved.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              UKL Moklet & Made With{" "}
              <i className="mdi mdi-heart-outline text-danger"></i>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}
