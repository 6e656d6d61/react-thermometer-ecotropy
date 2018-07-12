'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import Thermometer from '../lib/index'

ReactDOM.render(
  <Thermometer
    theme='light'
    value={22}
    max='50'
    format='°C'
    size='large'
    height='250'
    tooltipValue={true}
  />,
  document.getElementById('app')
)
