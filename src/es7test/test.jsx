import React,{findDOMNode} from 'react';
import classnames from 'utils/classnames.js';

class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shouldComponentUpdate(nextProps, nextState){
    return this.props!==nextProps||this.state!==nextState
  }

 
  render(){
    let arr = ['react', 'angular', 'vue']
    console.log(arr.includes('reacta'))
    let a = 7 ** 12
    let b = 2 ** 7
    console.log(a,b)  //幂的运算
    console.log('backbone'.padStart(10))
    console.log('0.00'.padStart(20))             
    console.log('10,000.00'.padStart(20))    
    console.log('250,000.00'.padStart(20))
    console.log('backbone'.padStart(10, '*')) 
    console.log('backbone'.padEnd(20, '*').padStart(10,"*"))  
    return(<div>
            <p>{a}</p>
            <p>{b}</p>
            <p></p>
          </div>
      )
  }
}
export default Test;