
import React, { Component } from "react";
import { Link } from "react-router";
import classnames from "utils/classnames.js";
import ReactDOM from "react-dom";
import Directorie from "./directories.jsx";
import "./directories.scss";
import data from "./data.js";

export default class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="directories-container">
      {
        data.map((item,i)=>{
          return <Directorie key={"directorie" + i} selected={41} directorie={item} />;
        })
      }
    </div>;
  }
}