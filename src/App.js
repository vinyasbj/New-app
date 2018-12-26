import React, { Component } from 'react';
import Headers from './compements/header'
import NavbarComp from './compements/navbar'
import Cards from './compements/cards'
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./css/bootstrap.css";
import "./css/bootstrap-grid.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container"  >
          <NavbarComp/>
          <Headers/>
          <Cards/>
        </div>
      </div>
    );
  }
}

export default App;
