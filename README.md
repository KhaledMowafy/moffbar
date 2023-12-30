# MoffBAR

MoffBar is a versatile and collapsible navigation bar React component designed for seamless integration into your web applications. With customizable styling options and support for React Router, MoffBar makes it easy to create a sleek and responsive navigation experience.

## Installation
```js
npm install moffbar
```

## Usage

Before using MoffBar, ensure you have react-router-dom installed.

```js
npm install react-router-dom
```

Then, in your main App file, import MoffBar and set up your routes:

```js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoffBar } from 'moffbar';
import Home from './pages/home';

function App() {
  const data = [
    { link: "/", name: "home" },
    { link: "/whoweare", name: "Who We Are" }
  ];

  return (
    <>
      <Router>
        <MoffBar
          data={data}
          bgcolor="radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(77,1,1,1) 0%, rgba(11,0,0,1) 100%)"
          textColor="black"
          textStroke="white"
          closeButton="black"
          closeActive="white"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoweare" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
```

# Props

## data (mandatory)

An array of objects containing the link and name of each page. Example

```js
const data = [
  { link: "/", name: "home" },
  { link: "/whoweare", name: "Who We Are" }
];
```

## bgcolor

The background color of the navbar when expanded. Example:

```js
bgcolor="radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(77,1,1,1) 0%, rgba(11,0,0,1) 100%)"
```

## textColor

The text color of the navigation links.

## textStroke

The text stroke color of the navigation links.

## closeButton

The color of the close button when idle.

## closeActive

The color of the close button when active.

# Customization

MoffBar is highly customizable, allowing you to tailor its appearance to suit your application's design. Experiment with different values for **bgcolor**, **textColor**, **textStroke**, **closeButton**, and **closeActive** to achieve the desired visual style.

Feel free to explore and modify the component according to your specific requirements!