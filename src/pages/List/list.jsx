import React,{Component} from 'react';

export default class List extends Component{
	componentDidMount(){
		console.log('list')
	}
	render(){
		let dataList = [
			{name:'A'},
			{name:'B'}
		]
		return <div>{
      dataList.map((item,i)=><p key={'p'+i}>{item.name}</p>)
		}
		</div>
	}
}