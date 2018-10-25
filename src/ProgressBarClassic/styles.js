export const getStyleForOuterBar = (props) => {
  return {
    height: props.height,
    background: props.background,
    borderRadius: `${props.borderRadius}px`
  }
}
export const getStyleForInnerBar = (props) => {
  if(props.fill > 100){ console.warn("ReactProgressable: `fill` property can not exceed 100"); }
  return {
    backgroundColor: props.fillColor,
    width: (props.fill>100)? '100%' : `${props.fill}%`,
    borderRadius: `${props.borderRadius}px`,
    transition : (props.animate)? `width ${props.animateDuration}s ease` : 'none'
  }
}
export const getStyleForInnerBarMulti = (obj, props, objIndex) => {
  if(obj.fill > 100){ console.warn("ReactProgressable: `fill` property can not exceed 100"); }
  return {
    backgroundColor: obj.fillColor,
    width: (obj.fill>100)? '100%' : `${obj.fill}%`,
    borderTopRightRadius: ((objIndex+1)===props.multiFill.length) ? `${props.borderRadius}px` : 'none',
    borderBottomRightRadius: ((objIndex+1)===props.multiFill.length) ? `${props.borderRadius}px` : 'none',
    transition : (props.animate)? `width ${props.animateDuration}s ease` : 'none'
  }
}
export const getStyleForFillText = (props) => {
  return {
    lineHeight: `${props.height}px`,
    ...props.fillTextStyle,
    backgroundColor: 'transparent'
  }
}
export const getStyleClassForInnerBar = (props) => {
  const classes = [];
  if(props.stripes){ classes.push('stripes'); }
  if(props.stripesAnimate){ classes.push('animate'); }
  if(props.stripesAnimateDirection){
    ['right', 'left'].includes(props.stripesAnimateDirection)? classes.push(props.stripesAnimateDirection) : 'left';
  }
  return classes.join(' ');
}
