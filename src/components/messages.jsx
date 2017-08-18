import React from 'react';
import Notification from 'rc-notification';
import styles from '../styles/components/_message.scss';

let defaultDuration = 1000;
let defaultTop;
let messageInstance;
let key = 1;
let prefixCls = 'sk-message';
let getContainer;

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance({
      transitionName: 'move-up',
      style: { top: defaultTop }, // 覆盖原来的样式
      getContainer,
    });
  return messageInstance;
}

let NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

function notice(content,duration,type,onClose,) {
  let iconType = ({
    info: 'info-circle',
    success: 'check-circle',
    error: 'cross-circle',
    warning: 'exclamation-circle',
    loading: 'loading',
  })[type];

  setTimeout(function(){
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },defaultDuration*1000)

  let instance = getMessageInstance();
  instance.notice({
    key,
    duration:duration?duration:10,
    style: {},
    content: (
      <div className={`sk-message-custom-content sk-message-${type}`}>
        <i className={iconType} ></i>
        <span>{content}</span>
      </div>
    ),
    onClose,
  });
  return (function () {
    let target = key++;
    return function () {
      instance.removeNotice(target);
    };
  }());
}

export default {
  info(content,duration , onClose) {
    return notice(content, duration, 'info', onClose);
  },
  success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose);
  },
  error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose);
  },
  // Departed usage, please use warning()
  warn(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  warning(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  loading(content, duration, onClose) {
    return notice(content, duration, 'loading', onClose);
  },
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
