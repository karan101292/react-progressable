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
<table> 
  <thead> 
    <tr>
      <th>Prop Name</th>
      <th>Prop Type</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr> 
  </thead> 
  <tbody>
    <tr>
      <td>background</td>
      <td><code>String</code></td>
      <td><code>#eeeeee</code></td>
      <td>Background color for un-filled area</td>
    </tr>
    <tr>
      <td>fill</td>
      <td><code>Number</code></td>
      <td><code>0</code></td>
      <td>Progress percentage. Max: 100. if muli={false}</td>
    </tr>
    <tr>
      <td>fillColor</td>
      <td><code>String</code></td>
      <td><code>#ff9a00</code></td>
      <td>Background color for filled area. if muli={false}</td>
    </tr>
    <tr>
      <td>fillText</td>
      <td><code>String</code></td>
      <td><code>NULL</code></td>
      <td>Progress-bar text to be appear in filled area. if muli={false}</td>
    </tr>
    <tr>
      <td>fillTextStyle</td>
      <td><code>Object</code></td>
      <td><code>{}</code></td>
      <td>React style object for <em>fillText</em> if muli={false}</td>
    </tr>
    <tr>
      <td>height</td>
      <td><code>Number</code></td>
      <td><code>25</code></td>
      <td>Height of the progress-bar in px.</td>
    </tr>
    <tr>
      <td>borderRadius</td>
      <td><code>Number</code></td>
      <td><code>0</code></td>
      <td>Border radius in px.</td>
    </tr>
    <tr>
      <td>multi</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>Multiple filled area in a single progress-bar</td>
    </tr>
    <tr>
      <td>multi</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>Multiple filled area in a single progress-bar</td>
    </tr>
    <tr>
      <td>multiFill</td>
      <td><code>Array</code></td>
      <td><code>[]</code></td>
      <td>
        Options for progress-bar when multi={true}
        <br/>
        <code>[ { fill: 10, fillColor: 'red', fillText: "10%", fillTextStyle: {color: '#FFF'} }, { fill: 20, fillColor: 'blue', fillText: "20%", fillTextStyle: {color: '#FFF'} }, { fill: 15, fillColor: 'green', fillText: "15%", fillTextStyle: {color: '#FFF'} } ] </code>
      </td>
    </tr>
    <tr>
      <td>animate</td>
      <td><code>Boolean</code></td>
      <td><code>true</code></td>
      <td>Progress-bar animation toggle</td>
    </tr>
    <tr>
      <td>animateDuration</td>
      <td><code>Number</code></td>
      <td><code>1</code></td>
      <td>Progress-bar animation duration in seconds</td>
    </tr>
    <tr>
      <td>stripes</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>Stripe effect on progress-bar</td>
    </tr>
    <tr>
      <td>stripesAnimate</td>
      <td><code>Boolean</code></td>
      <td><code>false</code></td>
      <td>Animate stripe effect</td>
    </tr>
    <tr>
      <td>stripesAnimateDirection</td>
      <td><code>String</code></td>
      <td><code>left</code></td>
      <td>Animated stripe effect direction. 'right' or 'left'</td>
    </tr>
  </tbody> 
</table>




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
