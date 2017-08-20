import React,{findDOMNode} from 'react';
import styles from './button.scss';
import PropTypes from 'prop-types';
import classnames from 'utils/classnames.js';

class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate(nextProps, nextState){
    return this.props!==nextProps||this.state!==nextState
  }
  handleClick(){
    if(this.props.onClick){
      this.props.onClick()
    }
  }
  render(){
		let { value,type='button',name,className,children} = this.props
		className=classnames("general-button",{[className]:className})
    return(<div className={className}>
            <button
							value={value}
              type={type}
              className={"btn"+ (name?' btn-'+name:'')}
              disabled={this.props.disabled}
              onClick = {this.handleClick.bind(this)}
						>
						{children}
            </button>
          </div>
      )
  }
}
	export default Button;
	Button.propTypes = {
		type:PropTypes.string,
		onClick:PropTypes.func,
		className:PropTypes.string,
		children:PropTypes.oneOfType([PropTypes.node,PropTypes.element])
	}
	Button.defaultProps = {
		children:'defaultText'
	}