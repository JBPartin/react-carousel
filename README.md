# react-carousel

> A simple react component that allows you to easily make a carousel slider.

[![NPM](https://img.shields.io/npm/v/react-carousel.svg)](https://www.npmjs.com/package/react-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install @jbpartin/react-carousel
```

## Usage

```jsx
import React, { Component } from 'react'
import Carousel from '@jbpartin/react-carousel'
import 'react-carousel/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Carousel
        responsive={{
          large: {
            toShow: 5,
            toSlide: 5
          },
          desktop: {
            toShow: 4,
            toSlide: 4
          },
          ipad: {
            toShow: 3,
            toSlide: 3
          },
          mobile: {
            toShow: 2,
            toSlide: 2
          }
        }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
    )
  }
}
```

## License

MIT © [JBPartin](https://github.com/JBPartin)
