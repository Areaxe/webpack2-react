
import React,{Component} from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "assets/styles/theme.scss";

export default class Template extends Component{
	componentDidMount(){}
	render(){
		return <ReactCSSTransitionGroup
			component="div"
			className="react-container"
			transitionName="slide-in"
			transitionEnterTimeout={300}
			transitionLeaveTimeout={300}>
				<div key={this.props.location.pathname} className={this.props.location.pathname}>
					{React.cloneElement(this.props.children, { key: location.pathname})}
				</div>
			</ReactCSSTransitionGroup>;
	}
}