import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import main from '../lib/'
import shape from './shape.svg'

const Main = () => {
  return (
    <div style={{}}>
      Hello World {main()}
      <img src={`/dist/${shape}`} />
    </div>
  )
}

ReactDOM.render(createElement(Main), document.getElementById('demo-app'))
