import React,{findDOMNode} from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from '../styles/components/_input.scss';
import PropTypes from 'prop-types';

class Input extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showDelBtn: false,
      init:true,
      showError:false,
      text:"",
    };
  }
  getValue(){
    let value = this.refs.input.value;
    let check = this.checkInput(value);
    return check?value:null
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state!==nextProps||this.state!==nextState
  }

  componentWillReceiveProps(nextProps){
    if(this.state.init&&nextProps.defaultValue||nextProps.defaultValue!==this.props.defaultValue){
       this.setState({text:nextProps.defaultValue,init:false});
    }
    if(nextProps.value){
      this.setState({text:nextProps.value,disabled:true})
    }
  }

  componentWillMount(){
    if(!this.state.text&&this.props.defaultValue){
       this.setState({text:this.props.defaultValue,init:false});
    }
    if(this.props.value){
      this.setState({text:this.props.value,disabled:true})
    }
  }
 
  componentDidUpdate(prevProps){
    if(prevProps.reValidate !== this.props.reValidate){
      this.onTextBlur()
    }
  }
  onTextBlur(){
    let inputText = this.refs.input.value
    let result = this.checkInput(inputText)
    if(this.props.onBlur){
     this.props.onBlur(inputText,result)
    }
  }
  checkInput(inputText){
    let validate = this.props.validate
    let result = true;
    let props = this.props
    if(validate!==undefined){
      switch(typeof validate){
        case 'boolean':
        result = validate
        break
        case 'object':
        result = validate.test(inputText)
        break
        case 'function':
        result = (validate(inputText)===""||validate(inputText)===false)?false:true
        break
        default:
        result=false
      }
    }
    if(props.maxSize){
      result = inputText.length>this.props.maxSize?false:result
    }
    if(props.minSize){
      result = inputText.length<this.props.minSize?false:result
    }
    if(props.required){
      if(!(inputText&&inputText.trim())){
        result = false
        this.setState({showError:true})
      }
    }else if(props.required===false){
      result = inputText?result:true
    }
    this.setState({
      showError:!result
    })
    return result
  }
  onTextChange(e){
    let inputText = e&&e.target.value||'';
    let validateResult  = this.checkInput(inputText)
    if(inputText&&!(this.props.closeBtn===false)){
      this.setState({
        showDelBtn:true,
        text:inputText
      })
    }else{
      this.setState({
        showDelBtn:false,
        text:inputText
      })
    }
    if(this.props.onChange){
      this.props.onChange(inputText,validateResult)
    }
  }
  onkeydown(e){
    if(e.keyCode===13){
      this.props.onEnter?this.props.onEnter():''
    }
  }

  clearText(){
    this.refs.input.value = '';
    this.onTextChange()
  }
  render(){
    let showError = this.state.showError
    let className = this.props.className?' '+this.props.className:''
    let errorText = showError&&this.props.errorMessage?<p styleName="error-text">{this.props.errorMessage}</p>:null
    let showClose = this.props.closeBtn===false?false:true
    let {disabled,autoComplete,placeholder,name,type} = this.props
    let inputClass = showError?'error-focus':''
    return(<div styleName='input' className={className}>
              <input
                ref={'input'}
                disabled={disabled||this.state.disabled}
                name={name}
                onKeyDown={this.onkeydown.bind(this)}
                autoComplete={autoComplete}
                styleName={inputClass}
                autoFocus={showError}
                type={type}
                placeholder={placeholder||''} 
                onBlur = {this.onTextBlur.bind(this)}
                onChange = {this.onTextChange.bind(this)}
                value = {this.state.text}
              />
              {this.state.text&&showClose&&!this.state.disabled&&!disabled?<span styleName="close-btn" onClick={this.clearText.bind(this)}>&#10005;</span>:null}
              {errorText}
          </div>
      )
  }
}

export default CSSModules(Input, styles);
Input.propTypes = {
  errorMessage:PropTypes.string,
  validate:PropTypes.oneOfType([PropTypes.func,PropTypes.bool,PropTypes.object]),
  onBlur:PropTypes.func,
  onChange:PropTypes.func,
  reValidate:PropTypes.bool,
  placeholder:PropTypes.string,
  styleName:PropTypes.string,
  type:PropTypes.string,
  defaultValue:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  maxSize:PropTypes.number
}
