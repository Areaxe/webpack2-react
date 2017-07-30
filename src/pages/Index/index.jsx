import React,{Component} from 'react';
import {Link} from 'react-router';
import './index.scss';
import Button from 'components/Button/button.jsx';
import Input from 'components/Input/input.jsx';
import Directorie from 'components/Directories/documents.jsx';
import Audio from 'components/Audio/audio.jsx';
export default class Index extends Component{
	constructor(props) {
		super(props);
		this.state = {
			text:""
		};
	}
	componentDidMount(){
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
		return <div className="index-page">
			<div className="directorie">
				<Directorie />
			</div>
			<div className="main">
				<Input
				validate={"aaa"==="aaa"}
				minLength={3}
				maxLength={6}
				require 
				/>
			<Audio />
				
			</div>
		</div>
	}
}

// {this.props.children && React.cloneElement(this.props.children, {
//             actions: actions,
//             states: this.state.states,
//         })}