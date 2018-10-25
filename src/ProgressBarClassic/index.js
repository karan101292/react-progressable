import React from "react";
import { getStyleForInnerBar, getStyleForOuterBar, getStyleClassForInnerBar, getStyleForInnerBarMulti, getStyleForFillText } from './styles.js';
import './index.css';

const ProgressBarClassic = (props) => {
  return (
    <div>
      {renderSingleProgressBar(props)}
      {renderMultiProgressBar(props)}
    </div>
  )
};

const renderSingleProgressBar = (props) => {
  if(!props.multi){
    return (
      <div className="reactprogressable__progressbar outer" style={getStyleForOuterBar(props)}>
        <div className={`reactprogressable__progressbar inner ${getStyleClassForInnerBar(props)}`} style={getStyleForInnerBar(props)}>
          {renderFillText(props)}
        </div>
      </div>
    );
  }
}
const renderMultiProgressBar = (props) => {
  if(props.multi){
    return (
      <div className="reactprogressable__progressbar outer" style={getStyleForOuterBar(props)}>
        {
          props.multiFill.map((obj, index)=>{
            return(
              <div key={index} className={`reactprogressable__progressbar inner ${getStyleClassForInnerBar(props)}`} style={getStyleForInnerBarMulti(obj, props, index)}>
                {renderFillText(obj)}
              </div>
            )
          })
        }
      </div>
    );
  }
}

const renderFillText = (props) => {
  return (
    <span
      className="reactprogressable__progressbar fill-text"
      style={getStyleForFillText(props)}>
        {props.fillText}
    </span>
  )
}

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
  stripesAnimateDirection: 'left',
  multi: false,
  multiFill: []
};

export {ProgressBarClassic};
