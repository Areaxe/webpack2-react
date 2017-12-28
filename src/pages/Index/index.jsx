import React,{Component} from "react";
import {Link} from "react-router";
import "./index.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { Button, Input, AnimateList,IconFont, Directories } from "components/index";
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from "react-dates";

export default class Index extends Component{
	constructor(props) {
		super(props);
		this.state = {
			startDate: null,
			endDate: null,
			focusedInput: "startDate",
		};
  }

	render(){
		return <div className="index-page">
			<Directories />
		</div>;
	}
}