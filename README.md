# Moffbar

MoffBar is a versatile and collapsible navigation bar React component designed for seamless integration into your web applications. With customizable styling options and support for React Router, MoffBar makes it easy to create a sleek and responsive navigation experience.

## Installation
```js
npm install moffbar
// #or
yarn add moffbar
```

## Usage

Import the Navigation component into your app.tsx or app.js file, and include it with your desired child components:

```js
import React from 'react';
import { Navigation } from 'moffbar';
import Home from './Home'; // Import your components as needed
import WhoWeAre from './WhoWeAre'; // Import your components as needed
const data = [
  { link: '/', name: 'Home' },
  { link: '/whoweare', name: 'Who We Are' },
  // Add more items as needed
  // Keep in mind to list the children inside the navigation bar with the same order you used in the data array
];

const App: React.FC = () => {
  return (
    <div>
      <Navigation data={data} textColor="#333" textStroke="#fff" closeButton="#ccc" closeActive="#999">
        <Home />
        <WhoWeAre />
        {/* Add more children components as needed */}
      </Navigation>
      {/* Your main content goes here */}
    </div>
  );
};

export default App;

```

# Props

## data (mandatory)

An array of objects representing the navigation items. Each object should have a link (URL or path) and a name (displayed text). Example

```js
const data = [
  { link: "/", name: "home" },
  { link: "/whoweare", name: "Who We Are" }
];
```
## Note: Ensure that the order of items in the data array aligns with the order of children listed inside the Navigation component for correct redirection.

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