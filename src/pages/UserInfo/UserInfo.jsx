import React,{Component} from 'react';
import {Link} from 'react-router';
import Button from 'components/Button/button.jsx';
import Input from 'components/Input/input.jsx';
// import Directorie from 'components/Directories/documents.jsx';
import DatePicker from 'components/DatePicker/datePicker.jsx';
import message from 'components/messages/messages.jsx';
import Test from '../../es7test/test.jsx';
import IconFont from 'components/IconFont/iconFont';
import AnimateList from 'components/AnimateList/list.jsx';

export default class UserInfo extends Component{
	constructor(props) {
		super(props);
		this.state = {};
  }

	render(){
		return <div className="userinfo-page">
			用户信息
		</div>
	}
}