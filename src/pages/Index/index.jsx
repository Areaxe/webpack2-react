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
		let accounts = [
			
		]
		return <div className="red-packet-page">
		  <div className="red-packet-bg">
		     <button className="red-packet-btn">点击领取</button>
			 <div ref="listContainer">
				 <p className="remind-text">以下小伙伴领取了红包：</p>
				 <ul>
					 {
						 ()=>{
							 let container = this.refs.listContainer
							 console.log(container)
							 return <div>-------------</div>
						 }
					 }
				 </ul>
			 </div>
		  </div>
		</div>
	}
}

// {this.props.children && React.cloneElement(this.props.children, {
//             actions: actions,
//             states: this.state.states,
//         })}