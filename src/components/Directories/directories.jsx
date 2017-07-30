import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'utils/classnames.js';
import ReactDOM from 'react-dom';
import './directories.scss';
import data from './data.js';

export default class Directories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleNode = this.toggleNode.bind(this);
    this.selectedDoc = this.selectedDoc.bind(this);
  }

  componentDidMount(){
    let selectedDom = this.refs[this.props.selected]
    if(selectedDom){
      this.setState({showAll:true})
    }
  }

  toggleNode(nodeId,event) {   //展开闭合目录效果
    console.log(event.target)
    this.setState({
      ['ul'+nodeId]: this.state.showAll?false:!this.state['ul'+nodeId], //
      showAll:false
    })

    let selectedUl = ReactDOM.findDOMNode(this.refs['ul'+nodeId])
    if(selectedUl)
      selectedUl.style.display = selectedUl.style.display === "none" ? "block" : "none"
  }

  selectedDoc(docId){
    console.log(docId)
    this.setState({selectedId:docId})
  }

  renderChildren(childList, selectedId, nodeId,ifShow = false, floor = 1) {
    let showAll = this.state.showAll
    return <ul style={{ display: (showAll || ifShow) ? "block" : "none" }} ref={'ul'+nodeId}>
      {
        childList.map((item, i) => {
          let isDirectiore = item.content_html?false:true
          return <li className="directories-item" key={item.id} ref={item.id}>
            <div 
              className={(isDirectiore ? 'directoire':"title")+(selectedId===item.id?' selected':'')} 
              style={{ paddingLeft: floor * 10 + 'px' }}
              onClick={()=>isDirectiore?'':this.selectedDoc(item.id)}
           >{
             
           }
              <div onClick={(e)=>this.toggleNode(item.id,e)}>{item.title}</div>
              {
                isDirectiore&&item.children&&item.children.length?
                  <span
                    className={(showAll||this.state['ul'+item.id] )? "arrow arrow-down" : "arrow"}
                    onClick={(e) => this.toggleNode(item.id,e)}> &rsaquo;
                    </span>
                  : null
              }
            </div>
            {
              item.children && item.children.length ?
                this.renderChildren(item.children, selectedId,item.id ,item.content_html, floor + 1)
                : null
            }
          </li>
        })
      }
    </ul>
  }

  render() {
    let directorie = this.props.directorie
    let selectedId = this.state.selectedId||this.props.selected
    let showAll = this.state.showAll
    return <ul>
      <li>
        <div className="directoire big-directiore">
          <div onClick={(e) => this.toggleNode(directorie.id,e)}>{directorie.title}</div>
          {
            directorie.children && directorie.children.length ?
              <span
                className={showAll||this.state['ul'+directorie.id] ? "arrow arrow-down" : "arrow"}
                onClick={(e) => this.toggleNode(directorie.id,e)}> &rsaquo;
            </span> : null
          }
        </div>
        {
          directorie.children && directorie.children.length ?
            this.renderChildren(directorie.children, selectedId,directorie.id) 
            : null
        }
      </li>
    </ul>
  }
}