import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import main from '../'

const Main = () => {
  return <div>Main {main()}</div>
}

ReactDOM.render(createElement(Main), document.getElementById('demo-app'))
