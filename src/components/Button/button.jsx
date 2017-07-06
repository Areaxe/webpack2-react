import React,{Component} from 'react';
import {Link} from 'react-router';
import './button.scss';
import classnames from 'utils/classnames.js';
export default class Button extends Component{
	componentDidMount(){
	}
	showProps(){
		console.log(this.props)
	}

	render(){
		let {name} = this.props
		let classNames = classnames('btn',{
      'light':name==='light',
			'primary':name==='primary',
			'success':name==='success',
		})
		return (
		  <button className={classNames} onClick={this.showProps.bind(this)}>click to show props</button>
		)
	}
}