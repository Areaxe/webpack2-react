import React,{Component} from "react";
import {Link} from "react-router";
import CSSTransitionGroup from "react-addons-css-transition-group";
// import AnimateMixin from "../../utils/animate";
export default class UserInfo extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		// this.mixins = [AnimateMixin];
  }

	render(){
		return <CSSTransitionGroup component="div"	transitionName="page" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
			<div style={{backgroundColor:"#f00"}} className="userinfo-page">
				用户信息
			</div>
		</CSSTransitionGroup>;
	}
}