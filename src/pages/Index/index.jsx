import React,{Component} from 'react';
import {Link} from 'react-router';
import './index.scss';
import Button from 'components/Button/button.jsx';
import Input from 'components/Input/input.jsx';
import Directorie from 'components/Directories/documents.jsx';
import DatePicker from 'components/DatePicker/datePicker.jsx';
export default class Index extends Component{
	constructor(props) {
		super(props);
		this.state = {
			text:""
		};
	}
	render(){
		return <div className="index-page">
			<DatePicker />
		</div>
	}
}