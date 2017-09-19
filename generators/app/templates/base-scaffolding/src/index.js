import './app.<%= style.toLowerCase() %>'

import React from 'react'
import { render } from 'react-dom'

const Hello = (props) => (
  <div className="app">
    This is your awesome Project:
    <h2><%= name %></h2>
    <p>
      <%= description %>
    </p>
    <div className="version">
      <%= version %>
    </div>
  </div>
)

render(<Hello />, document.getElementById('root'))
