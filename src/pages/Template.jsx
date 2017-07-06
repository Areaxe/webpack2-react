import React,{Component} from 'react';

export default class Template extends Component{
	componentDidMount(){
		console.log('aaaaaaaaaaa')
	}
	render(){
		return <div>{this.props.children}</div>
	}
}

// {this.props.children && React.cloneElement(this.props.children, {
//             actions: actions,
//             states: this.state.states,
//         })}