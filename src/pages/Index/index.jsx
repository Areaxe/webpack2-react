import React,{Component} from 'react';
import {Link} from 'react-router';
import './index.scss';
import Button from 'components/Button/button.jsx';
import Directorie from 'components/Directories/documents.jsx';
export default class Index extends Component{
	componentDidMount(){
		console.log('index');
	}
	showProps(){
		console.log(this.props);
	}

	render(){
		let accounts = [
			
		]
		return <div>
			<Directorie />
		</div>
	}
}

// {this.props.children && React.cloneElement(this.props.children, {
//             actions: actions,
//             states: this.state.states,
//         })}