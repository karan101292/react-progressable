# React-Progressable
A classic progressbar component for react. Lot to come yet...

## Install
```
npm install --save react-progressable
```

## Usage
```javascript
import React, {Component} from 'react';
import {ProgressBarClassic, ProgressCircleClassic} from "react-progressable";

class ProgressBarComponent extends Component {
    render(){
         <div>
            <ProgressBarClassic fill={80} />
            <ProgressCircleClassic fill={80} />
         </div>   
    }
}

export default ProgressBarComponent;
```

# Progress-Bar Classic
![Progress-Bar Classic](https://i.imgur.com/9Sr5lx6.png)
### Available Props:
Prop Name | Prop Type | Default Value | Description
---|---|---|---
background|`String`|`#eeeeee`|Background color for un-filled area
fill|`Number`|`0`|Progress percentage. Max: 100
fillColor|`String`|`#ff9a00`|Background color for filled area
fillText|`String`|`NULL`|Progress-bar text to be appear in filled area
fillTextStyle|`Object`|`{}`|React style object for *fillText*
height|`Number`|`25`|Height of the progress-bar in px.
borderRadius|`Number`|`0`|Border radius in px.
animate|`Boolean`|`true`|Progress-bar animation toggle
animateDuration|`Number`|`1`|Progress-bar animation duration in seconds


# Progress-Circle Classic
![Progress-Circle Classic](https://i.imgur.com/LdEjNny.png)
### Available Props:
Prop Name | Prop Type | Default Value | Description
---|---|---|---
background|`String`|`#eeeeee`|Background color for un-filled area
fill|`Number`|`0`|Progress percentage. Max: 100
fillColor|`String`|`#ff9a00`|Background color for filled area
fillText|`String`|`NULL`|Progress-circle text to be appear in center
fillTextStyle|`Object`|`{}`|React style object for *fillText*
size|`Number`|`150`|Height and Width of the progress-circle.
ringWidth|`Number`|`7`| Width of the progress-circle filled area
