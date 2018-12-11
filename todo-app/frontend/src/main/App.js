import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import BrowserRouter from './routes'
import Menu from '../template/menu'


export default props=>(
  <div className='container'>
       <Menu/>
       <BrowserRouter/>
  </div>
)