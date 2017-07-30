import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'utils/classnames.js';
import ReactDOM from 'react-dom';
import './input.scss';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text:""
    };
    this.onChange = this.onChange.bind(this)
    this.onBlur= this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.clearText = this.clearText.bind(this)
  }

  getValue(){
      return this.refs.input.value
  }

 
  onChange(e){
      let text = e.target.value
    console.log(text)
    this.validateText()
    this.setState({text:text})
  }

  onBlur(text){
      console.log('blur')
    this.setState({text:text})
  }

  onFocus(){
      this.setState({
          showError:false
      })
  }

//maxLength
//min length
//length
//require
//type

  validateText(){
      let {validate,require,minLength,maxLength,length} = this.props
      let text = this.state.text
      let ifTrue = true
    if(validate){
        console.log(typeof validate)
      switch(typeof validate){
          case "function":
           ifTrue = validate(text);
           break;  
          case "boolean":
            ifTrue = validate
            break
          case "object":
            ifTrue = RegExpObject.test(text)
            return 
          default:
            return
      } 
    }
    if(require){
        ifTrue = text?ifTrue:false
    }
    if(minLength){
        ifTrue = text.length>=parseInt(minLength)?ifTrue:false
    }
    if(maxLength){
        ifTrue = text.length<=parseInt(maxLength)?ifTrue:false
    }
    if(length){
        ifTrue = text.length===parseInt(length)?ifTrue:false
    }
    if(!ifTrue){
        this.setState({
            showError:true
        })
    }
    return ifTrue;
  }

  clearText(){
      console.log(this.refs)
      this.refs.input.value = "";
  }

 //errorMessage
  //showError
  //showClose
  //value
  //defaultValue
  //
  render() {
      let showClose = true
      let showError = this.state.showError
      let className = classnames("input",{
          "error-input":showError,
      })
    return <div className={className}>
        <input
            ref="input"
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
         />
        {
            showClose?<span className="close-btn" onClick={this.clearText}>&#10005;</span>:null
        }
        {
            showError?<p>{this.props.errorMessage}</p>:null
        }
    </div>
        
  }
}