import React from "react";
import { getStyleForInnerBar, getStyleForOuterBar, getStyleClassForInnerBar } from './styles.js';
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
      <div className={`reactprogressable__progressbar inner ${getStyleClassForInnerBar(props)}`} style={getStyleForInnerBar(props)}>
        {renderFillText(props)}
      </div>
    </div>
  );
};

ProgressBarClassic.defaultProps = {
  height: 25,
  background: '#eee',
  fill: 0,
  fillColor: '#ff9a00',
  fillText: '',
  fillTextStyle: {},
  borderRadius: 0,
  animate: true,
  animateDuration: 1,
  stripes: false,
  stripesAnimate: false,
  stripesAnimateDirection: 'left'
};

export {ProgressBarClassic};
