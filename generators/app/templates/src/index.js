import React from 'react'
import { render } from 'react-dom'

const Hello = (props) => (
  <div>
    This is your awesome Project <b><%= name %></b>
  </div>
)

render(<Hello />, document.getElementById('root'))
