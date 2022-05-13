# react-custom-rangeslider


React slider component

### Installation

```sh
yarn add react-custom-rangeslider
npm install react-custom-rangeslider --save
```

### Storybook Demo

[https://myribbonapps.github.io/react-custom-rangeslider/?path=/story/rangeslider--primary](https://myribbonapps.github.io/react-custom-rangeslider/?path=/story/rangeslider--primary)

### Usage

```javascript
import React from 'react';
import Slider from 'react-custom-rangeslider';

function App() {
 const [value, setValue] = useState(0)

  return (
     <div className="App" style={{ width: "500px", margin: "auto" }}>
      {value}
      <Slider
        value={value}
        setValue={setValue}
      />
    </div>
  );
}
```

### Styling

```javascript
  <Slider
        progressBg="black"
        trackBg="grey"
        thumbBg="purple"
        value={value}
        setValue={setValue}
      />
```

### Props

| Name        | Type     | Description                           | Default     |
| ----------- | -------- | ------------------------------------- | -------     |
| progressBg  | string   | Progress background                   | `'#06c'`    |
| trackBg     | string   | Track background                      | `'#f2f2f2'` |
| thumbBg     | string   | Thumb background                      | `'#fbfbfd'` |
| value       | number   | useState value                        | `0`         |
| setValue    | Function | Function                              |             |
| min         | number   | Min step value                        |  `1`        |
| max         | number   | Max step value                        |  `100`      |
| step        | number   | Step value                            |  `1`        |

### License

MIT
