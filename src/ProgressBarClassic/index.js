import React from "react";
import { getStyleForInnerBar, getStyleForOuterBar } from './styles.js';
import './index.css';

const renderFillText = (props) => {
  return (
    <span
      className="reactprogressable__progressbar fill-text"
      style={{lineHeight: `${props.height}px` ,...props.fillTextStyle, backgroundColor: 'transparent'}}>
        {props.fillText}
    </span>
  )
}

const ProgressBarClassic = (props) => {
  const { height } = props;
  return (
    <div className="reactprogressable__progressbar outer" style={getStyleForOuterBar(props)}>
      <div className="reactprogressable__progressbar inner" style={getStyleForInnerBar(props)}>
        {renderFillText(props)}
      </div>
    </div>
  );
};

ProgressBarClassic.defaultProps = {
  height: 25,
  background: '#eee',
  fill: 0,
  fillColor: 'orange',
  fillText: '',
  fillTextStyle: {},
  borderRadius: 0,
  animate: true,
  animateDuration: 2
}

export {ProgressBarClassic};
