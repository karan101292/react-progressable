const getStyleForOuterBar = (props) => {
  return {
    height: props.height,
    background: props.background,
    borderRadius: `${props.borderRadius}px`
  }
}
const getStyleForInnerBar = (props) => {
  if(props.fill > 100){ console.warn("ReactProgressable: `fill` property can not exceed 100"); }
  return {
    backgroundColor: props.fillColor,
    width: (props.fill>100)? '100%' : `${props.fill}%`,
    borderRadius: `${props.borderRadius}px`,
    transition : (props.animate)? `width ${props.animateDuration}s ease` : 'none'
  }
}
const getStyleClassForInnerBar = (props) => {
  const classes = [];
  if(props.stripes){ classes.push('stripes'); }
  if(props.stripesAnimate){ classes.push('animate'); }
  if(props.stripesAnimateDirection){
    ['right', 'left'].includes(props.stripesAnimateDirection)? classes.push(props.stripesAnimateDirection) : 'left';
  }
  return classes.join(' ');
}

export { getStyleForInnerBar, getStyleForOuterBar, getStyleClassForInnerBar };
