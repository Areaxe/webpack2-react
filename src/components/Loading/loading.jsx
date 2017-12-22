import React,{findDOMNode} from "react";
import styles from "./loading.scss";

class Loading extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    let showLoading = this.props.loading;
    return showLoading ?
      <div styleName="screen">
        <div styleName="loadEffect">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> : null;
  }
}

export default Loading;
