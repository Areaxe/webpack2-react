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

  toggleNode(nodeId,event) {   //  展开闭合目录效果
    this.setState({
      [nodeId]: !this.state[nodeId], //
    })
  }

  selectedDoc(docId){
    this.setState({selectedId:docId})
  }

  renderChildren(childList, selectedId, parentId,ifShow = false, floor = 1) {
    const showcur = this.state[parentId] || ifShow || !floor  //  if parent is Selected or it is zero floor or parent want him show
    return <ul className={ showcur ? "document-block" : "document-hide" } id={`ul${parentId}`} ref={`ul${parentId}`}>
      {
        childList.map(item => {
          let isDirectiore = item.content_html?false:true;
          let hasChild = item.children&&item.children.length;
          const style = { paddingLeft: floor * 10 + 'px' };
          return <li className="directories-item" key={item.id} ref={item.id}>
            {
              isDirectiore?
              <div className='directoire' style={style} >
                <div onClick={(e)=>this.toggleNode(item.id,e)}>{item.title}</div>
                {
                  hasChild ? <span
                    className={(this.state[item.id])? "arrow arrow-down" : "arrow"}
                    onClick={(e) => this.toggleNode(item.id,e)}> &rsaquo;
                  </span>:null
                }
              </div>
              :<div className={selectedId===item.id?'title selected':'title'} style={style} >
                <div onClick={(e)=>this.selectedDoc(item.id,e)}>{item.title}</div>
              </div>
            }
            {
              hasChild ?
                this.renderChildren(item.children, selectedId, item.id, item.content_html, floor + 1)
                : null
            }
          </li>
        })
      }
    </ul>
  }

  render() {
    const { directorie, selected } = this.props;
    const { selectedId } = this.state;
    const selectId = selectedId || selected;
    return <ul>
      <li>
        {
          this.renderChildren( [ directorie ], selectId, directorie.id, true, 0 )
        }
      </li>
    </ul>
  }
}
