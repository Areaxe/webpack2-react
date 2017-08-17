import React, {Component} from 'react';
import {Link} from 'react-router';
import './datePicker.scss';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthDNum: [0,31,28,31,30,31,30,31,31,30,31,30,31],
      showCalen: false,
      year:"",
      month:"",
      day:"",
      selectedDay:{}
    };
    this.showYear = this.showYear.bind(this)
    this.showMonth = this.showMonth.bind(this)
    this.selectYear = this.selectYear.bind(this)
    this.selectMonth = this.selectMonth.bind(this)
    this.pickerBlur = this.pickerBlur.bind(this)
    this.showCalendar = this.showCalendar.bind(this)
  }
  componentDidMount(){
    let defaultValue = this.props.defaultValue
    let date = defaultValue?new Date(defaultValue):new Date()
    this.setState({
      year:date.getFullYear(),
      month:date.getMonth()+1,
      day:date.getDate(),
      selectedDay:{
        syear:date.getFullYear(),
        smonth:date.getMonth()+1,
        sday:date.getDate()
      }
    })
  }

  isLeapYear(y) { //是否闰年
    if (0 == y % 4 && ((y % 100 != 0) || (y % 400 == 0))) {
      return true;
    } else {
      return false;
    }
  }

  showCalendar(){
    this.setState({showCalen:true,showMonthSelect:false,showYearSelect:false})
  }

  pickerBlur(){
    this.setState({
      showCalen:false,
      showMonthSelect:false,
      showYearSelect:false
    })
  }

  calendar_modify(y, m, d) {  //
    let {monthDNum} = this.state
    if (m < 1) {m = 12; y = y - 1;}
    if (m > 12) {m = 1;y = y + 1;}
    var num = (this.isLeapYear(y) && m == 2)? monthDNum[m] + 1: monthDNum[m];
    if (d > num) {
      d = num;
    }
    this.setState({year:y,month:m,day:d})
  }

  selectDay(year,month,day){  //点击日期选择的时候触发并存入
    this.setState({
      showCalen:false,
      year:year,
      month:month,
      day:day,
      selectedDay:{syear:year,smonth:month,sday:day}
    })
    if(this.props.onChange){
      this.props.onChange(year+"-"+month+"-"+day)
    }
  }

  showYear(){
    this.setState({showYearSelect:true,showCalen:false})
  }

  showMonth(){
    this.setState({showMonthSelect:true,showCalen:false})
  }

  getYearList(startYear,endYear){  //获取年份范围
    let yearList = []
    for(let i=startYear;i<=endYear;i++){
      yearList.push(i)
    }
    return yearList
  }

  getDateList(dayNum){
    let dates = []
    for(let i=1;i<dayNum;i++){
      dates.push(i)
    }
    return dates
  }

  selectMonth(m){  //选择月份
    this.setState({month:m,showMonthSelect:false,showCalen:true})
  }

  selectYear(y){  //选择年份
    this.setState({year:y,showYearSelect:false,showCalen:true})
  }

  render() {
    let {showCalen,year,month,day,monthDNum,selectedDay,showYearSelect,showMonthSelect} = this.state
    let {syear,smonth,sday} = selectedDay
    let MonthText = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
    let weekList = ["日","一","二","三","四","五","六"]
    let start = new Date(year,month-1,1).getDay()
    let dayNum = (this.isLeapYear(year)&&month==2)?monthDNum[month]+1:monthDNum[month];
    
    return <div className="date-picker" tabIndex="-1" onBlur={this.pickerBlur}>
      <div className="date-show" onClick={this.showCalendar}>
        {
          syear&&smonth&&sday?syear+"-"+smonth+"-"+sday:"选择时间"
        }
      </div>
      {
      showCalen?
        <div className="list-container">
          <div className="select-module">
            <span className="left-arrow" onClick={()=>this.calendar_modify(year,month-1,day)}>&#139;	</span>
              <div className="selected-container">
                <span onClick={this.showMonth}>{MonthText[month-1]}</span>&nbsp;
                <span onClick={this.showYear}>{year}</span>
              </div>
            <span className="right-arrow" onClick={()=>this.calendar_modify(year,month+1,day)} >&#155;</span>
          </div>
          <ul className="week-list">
            {
              weekList.map((item,i)=>{
                return <li key={"week"+i}>{item}</li>
              })
            }
          </ul>
          <ul className="date-list">
            <li style={{width:(start/7*100)+'%'}}></li>
              {
                this.getDateList(dayNum).map((item,i)=><li 
                  className={sday===item&&smonth===month&&syear===year?"selected":""} 
                  onClick={()=>this.selectDay(year,month,item)} 
                  key={"date"+i}>
                 {item}
                </li>)
              }
          </ul>
        </div>:null
      }
      {
        showYearSelect?<div className="list-container">
          <div className="select-module">
            <span className="left-arrow" onClick={()=>this.setState({year:year-11})}>&#139;	</span>
              <div className="selected-container">
                {year+"-"+(year+11)}
              </div>
            <span className="right-arrow" onClick={()=>this.setState({year:year+11})}>&#155;</span>
          </div>
          <ul className="year-list">
            {
              this.getYearList(year,year+11).map((item,i)=>
                <li onClick={()=>this.selectYear(item)} key={"year"+i}>{item}</li>
              )
            }
          </ul>
        </div>:null
      }
      {
        showMonthSelect?<div className="list-container">
          <div className="select-module">
            <span className="left-arrow" onClick={()=>this.setState({year:year-1})}>&#139;	</span>
              <div className="selected-container">
               {year}
              </div>
            <span className="right-arrow" onClick={()=>this.setState({year:year+1})}>&#155;</span>
          </div>
          <ul className="month-list">
            {
              MonthText.map((item,i)=>
                <li onClick={()=>this.selectMonth(i+1)} key={"month"+i}>{item}</li>
              )
            }
          </ul>
        </div>:null
      }
    </div>
  }
}
// DatePicker.propTypes = {
//   defaultValue:PropTypes.string,
//   onChange:PropTypes.func,
// }