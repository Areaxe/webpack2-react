
import React,{findDOMNode} from "react";
import PropTypes from "prop-types";
import styles from "./button.scss";
import classnames from "utils/classnames.js";

class Button extends React.Component{
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){
    return this.props != nextProps || this.state !== nextState;
  }

  handleClick(onClick){
    onClick && onClick();
  }
  
  render(){
		let { value, type = "button", name, className, children, disabled, onClick } = this.props;
		let ClassName = classnames("general-button",{ [className]:className });

    return(<div className={ClassName}>
            <button
							value={value}
              type={type}
              className={"btn" + (name ? " btn-" + name : "")}
              disabled={disabled}
              onClick = {this.handleClick.bind(this,onClick)}
						>
						{children}
            </button>
          </div>
      );
  }
}
export default Button;

Button.propTypes = {
  type:PropTypes.string,
  onClick:PropTypes.func,
  className:PropTypes.string,
  children:PropTypes.oneOfType([PropTypes.node, PropTypes.element])
};

Button.defaultProps = {
  children:"defaultText"
};