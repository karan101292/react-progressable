import React from "react";
import { getStyleForInnerBar, getStyleForOuterBar } from './styles.js';
import './index.scss';

const ProgressCircleClassic = (props) => {

  return (
    <div className="progress" data-percentage={Math.round(props.fill)} style={getStyleForOuterBar(props)}>
        <span className="progress-left">
            <span className="progress-bar" style={getStyleForInnerBar(props, 'left')}></span>
        </span>
        <span className="progress-right">
            <span className="progress-bar" style={getStyleForInnerBar(props, 'right')}></span>
        </span>
        <div className="progress-value">
            <div style={{fontSize: '34px', ...props.fillTextStyle}}>
                {props.fillText}
            </div>
        </div>
        <div className="progress-after" style={{borderWidth: props.ringWidth, borderColor: props.background}}></div>
    </div>
  );
};

ProgressCircleClassic.defaultProps = {
  background: '#EEE',
  fill: 0,
  size: 150,
  ringWidth: 7,
  fillText: '',
  fillTextStyle: {},
  fillColor: 'orange',
}

export {ProgressCircleClassic};
