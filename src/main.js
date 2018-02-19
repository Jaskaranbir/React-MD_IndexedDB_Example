// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '@c/routes'

import batchLoadDB from '@/DBTestData'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app')
)

batchLoadDB()
