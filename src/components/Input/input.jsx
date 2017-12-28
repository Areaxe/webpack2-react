import React,{findDOMNode} from "react";
import ReactDOM from "react-dom";
import styles from "./input.scss";
import PropTypes from "prop-types";
import classnames from "utils/classnames.js";

class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      init:true,
      showError:false,
      text:"",
    };
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state !== nextProps || this.state !== nextState;
  }

  componentWillReceiveProps(nextProps){      //当用户从这个表单页面数据切换到另一个表单页面时，此时的输入框也需要重新更改text值
    // if(this.state.init&&nextProps.defaultValue||nextProps.defaultValue!==this.props.defaultValue){
    //    this.setState({text:nextProps.defaultValue,init:false});
    // }
    this.setText(nextProps);
  }
  componentWillMount(){
    this.setText(this.props);
  }
  setText(props){
    let {defaultValue,value,disabled = false} = props;
    this.setState({disabled:disabled});    
    if(value){
      this.setState({text:value,disabled:true});
    }else if(defaultValue){
      this.setState({text:defaultValue});
    }
  }
  getValue(){
    let value = this.refs.input.value;
    return value;
  }

  getCheckValue(){
    let value = this.getValue();
    let check = this.checkInput(value);
    return check ? value : null;   //如果通过验证，则返回数据，如果未通过验证，则返回null
  }
  onTextBlur(){
    let inputText = this.getValue();
    let result = this.checkInput(inputText);
    if(this.props.onBlur){
      this.props.onBlur(inputText,result);
    }
  }

  checkInput(inputText){
    //verification  校验规则和校验结果，为true:表示校验结果为true,否则，为false
    let {verification = true,maxSize,minSize,required} = this.props;
    let result = true;
    switch(typeof verification){
      case "boolean":
      result = verification;
      break;
      case "object":
      result = verification.test(inputText);
      break;
      case "function":
      result = (verification(inputText) === "" || verification(inputText) === false) ? false : true;
      break;
      default:
      result = false;
    }
    if(maxSize){
      result = inputText.length > maxSize ? false : result;
    }
    if(minSize){
      result = inputText.length < minSize ? false : result;
    }
    if(required){
      if(!(inputText && inputText.trim())){
        result = false;
      }
    }else if(required === false){
      result = inputText ? result : true;   //如果是非必填项，用户填写则去验证，否则不验证
    }
    this.setState({showError:!result});
    return result;
  }

  onTextChange(){
    let inputText = this.getValue();
    this.setState({text:inputText});
    let verificationREsult = this.checkInput(inputText);
    if(this.props.onChange){
      this.props.onChange(inputText,verificationREsult);
    }
  }

  onkeydown(e){
    if(e.keyCode === 13){
      this.props.onEnter ? this.props.onEnter() : "";
    }
  }

  clearText(){
    this.refs.input.value = "";
    this.onTextChange();
  }
  render(){
    let {autoComplete,placeholder,name,type,errorMessage,closeBtn = true,value,className} = this.props;
    let {showError,disabled,text} = this.state;
    className = classnames("xd-input",{[className]:className});
    return(<div className={className}>
              <input
                name={name}
                ref={"input"}
                type = {type}
                value = {text}
                autoFocus={showError}
                autoComplete={autoComplete}
                placeholder={placeholder || ""} 
                disabled={disabled}
                className={showError ? "error-focus" : ""}
                onBlur = {this.onTextBlur.bind(this)}
                onChange = {this.onTextChange.bind(this)}
                onKeyDown={this.onkeydown.bind(this)}
              />
              {text && closeBtn && !disabled ? <span className="close-btn" onClick={this.clearText.bind(this)}>&#10005;</span> : null}
              {showError && errorMessage ? <p className="error-text">{errorMessage}</p> : null}
          </div>
      );
  }
}

export default Input;

Input.propTypes = {
  errorMessage:PropTypes.string,
  verification:PropTypes.oneOfType([PropTypes.func,PropTypes.bool,PropTypes.object]),
  onBlur:PropTypes.func,
  onChange:PropTypes.func,
  placeholder:PropTypes.string,
  type:PropTypes.string,
  defaultValue:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  maxSize:PropTypes.number
};