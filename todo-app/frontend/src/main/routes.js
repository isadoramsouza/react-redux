import React from 'react'
import {BrowserRouter, Route, Redirect, hashHistory} from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    

<BrowserRouter>
<div>
  <Route path='/todos' component={Todo} />
  <Route path='/about' component={About} />
 
</div>
</BrowserRouter>
)