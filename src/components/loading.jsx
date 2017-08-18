import React,{findDOMNode} from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/components/_loading.scss';
import {connect} from 'react-redux';

class Loading extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    let showLoading = this.props.loading
    return showLoading?
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
      </div>:null
  }
}
function select(state){
  return {
    loading:state.LoadingReducer.loading
  };
}
export default connect(select)(CSSModules(Loading, styles,{allowMultiple:true}));
