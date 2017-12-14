import React,{findDOMNode} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './iconfont.css';
import classnames from '../../utils/classnames';

class IconFont extends React.Component{
  render(){
    let { name, className } = this.props;
		let classname = classnames("",{
			["fa-"+name]: name,
			[className]: className,
		});
    return(<span className={classname}></span>
      )
  }
}

export default IconFont;

IconFont.propTypes = {
  name:PropTypes.string,
}