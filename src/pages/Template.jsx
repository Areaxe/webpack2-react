import React,{Component} from 'react';

export default class Template extends Component{
	componentDidMount(){}
	render(){
		return <div>{this.props.children}</div>
	}
}

// {this.props.children && React.cloneElement(this.props.children, {
//             actions: actions,
//             states: this.state.states,
//         })}