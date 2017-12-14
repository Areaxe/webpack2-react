import React,{Component} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
export default class Template extends Component{
	componentDidMount(){}
	render(){
		return  <div>
			<CSSTransitionGroup component="div"	transitionName="page" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, { key: location.pathname})}
			</CSSTransitionGroup>
    </div>
	}
}

// {this.props.children && React.cloneElement(this.props.children, {
//             actions: actions,
//             states: this.state.states,
//         })}