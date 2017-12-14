import React,{Component} from 'react';
import {Link} from 'react-router';
import './index.scss';
import Button from 'components/Button/button.jsx';
import Input from 'components/Input/input.jsx';
// import Directorie from 'components/Directories/documents.jsx';
import DatePicker from 'components/DatePicker/datePicker.jsx';
import message from 'components/messages/messages.jsx';
import Test from '../../es7test/test.jsx';
import IconFont from 'components/IconFont/iconFont';
import AnimateList from 'components/AnimateList/list.jsx';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

export default class Index extends Component{
	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null,
			focusedInput: 'startDate',
		};
  }
			/*<AnimateList style={{minWidth:'800px'}} />*/

	render(){
		return <div className="index-page">
			<IconFont name="user-o" />
			{/*<DateRangePicker
				startDate={this.state.startDate} // momentPropTypes.momentObj or null,
				endDate={this.state.endDate} // momentPropTypes.momentObj or null,
				onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
				focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
				onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
			/>*/}
			<AnimateList />
			<Link to={"userinfo"}>userinfo</Link>
		</div>
	}
}