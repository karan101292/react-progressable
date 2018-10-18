const getStyleForOuterBar = (props) => {
  return {
    height: props.size,
    width: props.size,
    lineHeight: props.size
  }
}
const getStyleForInnerBar = (props, side) => {
  const style = {
    borderWidth: props.ringWidth,
    borderColor: props.fillColor
  }
  if(side === 'left'){
    style.borderTopRightRadius = props.size/2;
    style.borderBottomRightRadius = props.size/2;
  }else if(side === 'right'){
    style.borderTopLeftRadius = props.size/2;
    style.borderBottomLeftRadius = props.size/2;
  }
  return style;
}

export { getStyleForInnerBar, getStyleForOuterBar };
