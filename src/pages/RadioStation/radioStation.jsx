import React,{Component} from 'react';
import {Link} from 'react-router';
import './index.scss';
export default class Index extends Component{
	constructor(props) {
		super(props);
		this.state = {
			text:""
		};
	}
	componentDidMount(){
		console.log('index');
	}
	showProps(){
		console.log(this.props);
	}
	onChange(text){
		this.setState({
			text:text
		})
	}

	render(){
		return <div className="radio-station">
			
		</div>
	}
}

// {this.props.children && React.cloneElement(this.props.children, {
//             actions: actions,
//             states: this.state.states,
//         })}