import React,{Component} from 'react';
import {Link} from 'react-router';
import './index.scss';
import Button from 'components/Button/button.jsx';
import Input from 'components/Input/input.jsx';
import Directorie from 'components/Directories/documents.jsx';
import DatePicker from 'components/DatePicker/datePicker.jsx';
import message from 'components/messages/messages.jsx';

export default class Index extends Component{
	constructor(props) {
		super(props);
		this.state = {
		};
  }
  btnClick(){
    // message.success("success")
    let inputText = this.refs.input.getCheckValue()
    alert(inputText)
  }
	render(){
		return <div className="index-page">
      <Input
        maxSize={5}
        defaultValue=""
        required={false}
        className="input"
        placeholder="这是输入框"
        errorMessage={"错误的输入"}
        ref="input"
       />
       <Button type="button" className="submit-btn" onClick={this.btnClick.bind(this)}>提交数据</Button>
			<DatePicker
        className="date-picker"
			/>
		</div>
	}
}