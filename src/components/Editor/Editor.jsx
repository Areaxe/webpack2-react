import React,{findDOMNode} from 'react';
import ReactDOM from 'react-dom';
import styles from './editor.scss';
import PropTypes from 'prop-types';

class Editor extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.state!==nextProps||this.state!==nextState
  }
  
  render(){
    return {
			
		}
  }
}

export default Editor

let defaultBar = [ 
	{	name:"bold", iconName:"",	title:""},
	{	name:"orderList", iconName:"",	title:""},
	{	name:"unorderList", iconName:"",	title:""},
	{	name:"h1", iconName:"",	title:""},
	{	name:"h2", iconName:"",	title:""},
	{	name:"code", iconName:"",	title:""},
	{	name:"img", iconName:"",	title:""},
	{	name:"link", iconName:"",	title:""},
]

Editor.propTypes = {
  editorIcon: PropTypes.array,
	placeholder: PropTypes.string,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	toolbar: PropTypes.array,
	icon: PropTypes.array,
}

Editor.defaultProps = {
	editorIcon: ["", ""],
	placeholder: "content",
	defaultValue: "",
	toolbar: defaultBar,
	icon: defaultIcon,
	editable: true,
}

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
}