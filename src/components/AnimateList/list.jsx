
import React, {Component} from "react";
import dataList from "./listData.js";
import "./list.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.curIndex = 0; //  show child index
    this.showItemNUm = 5;
    this.childLength = 0;
    this.nextList = this.nextList.bind(this);
    this.preList = this.preList.bind(this);
  }

  componentDidMount() {
    let sliderList = this.refs.slider_list;
    let sliderItem = sliderList.querySelectorAll(".animate-item");
    let sliderContainer = this.refs.slider_container;
    this.childLength = sliderItem.length;
    this.showItemNUm = this.showItemNUm > this.childLength ? this.childLength : this.showItemNUm;
    sliderList.style.width = (sliderContainer.offsetWidth * this.childLength / this.showItemNUm).toFixed(3) + "px";
    sliderItem.forEach((item) => {
      item.style.width = 100 / this.childLength + "%";
    });
    this.timer = null;
    window.onresize = () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        sliderList.style.width = (sliderContainer.offsetWidth * this.childLength / this.showItemNUm).toFixed(3) + "px";
        sliderContainer.style.height = (sliderContainer.width / this.showItemNUm) + "px";
      }, 10);
    };
  }

  preList() {
    let sliderList = this.refs.slider_list;
    if (this.curIndex > 0) {
      if (this.curIndex >= this.showItemNUm) {
        this.curIndex -= this.showItemNUm;
      } else {
        this.curIndex = 0;
      }
      sliderList.style.marginLeft = "-" + (this.curIndex * sliderList.offsetWidth / this.childLength) + "px";
      sliderList.style.transition = "all .5s cubic-bezier(.4,0,.2,1)";
    } else {
      this.curIndex = 0;
      sliderList.style.marginLeft = "0px";
      sliderList.style.transition = "";
    }
  }

  nextList() {
    let sliderList = this.refs.slider_list;
    if (this.curIndex < this.childLength) {
      if (this.childLength - this.curIndex >= 2 * this.showItemNUm) {
        this.curIndex += this.showItemNUm;
      } else if (this.childLength - this.curIndex > this.showItemNUm) {
        this.curIndex += this.childLength % this.showItemNUm;
      } else {
        return;
      }
      if (this.curIndex < this.childLength) {
        sliderList.style.marginLeft = "-" + (this.curIndex * sliderList.offsetWidth / this.childLength) + "px";
        sliderList.style.transition = "all .5s cubic-bezier(.4,0,.2,1)";
      }
    }
  }

  render() {
    let daList = dataList || [];
    let { style } = this.props;
    return <div className="list-container" style={style}>
      <div className="slider-container" ref="slider_container">
        <div className="left-arrow" onClick={() => this.preList()}>
          ‹
        </div>
        <ul className="animate-list" ref="slider_list">
          {
            daList.map((item, i) => {
            return <li key={item + i} className="animate-item">
              <img className="img-bg" src={item.bgImg}/>
              <div className="item-container">
                <div className="item-icon">{item.icon}</div>
                <div className="item-title">{item.title}</div>
                <div className="item-content">{item.content}</div>
                <button className="item-btn">查看详情</button>
              </div>
            </li>;
          })
        }
        </ul>
        <div className="right-arrow" onClick={() => this.nextList()}>
          ›
        </div>
      </div>
    </div>;
  }
}
