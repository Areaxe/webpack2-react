import React,{Component} from 'react';
import {Link} from 'react-router';
import './index.scss';
import Button from 'components/Button/button.jsx';
export default class Index extends Component{
	componentDidMount(){
		console.log('index');
	}
	showProps(){
		console.log(this.props);
	}

	render(){
		return <div className="home">
		  <Button name="primary" onClick={this.showProps.bind(this)}>click to show props</Button>
			<Link to={'/list'}>to List</Link>
			<p className="error-text">我是全局样式</p>
		</div>
	}
}

// {this.props.children && React.cloneElement(this.props.children, {
//             actions: actions,
//             states: this.state.states,
//         })}