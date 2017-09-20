import React from 'react';
import {render} from 'react-dom'
import Hello from '@/components/Hello/Hello'
import {BrowserRouter} from 'react-router-dom';


render(
  <BrowserRouter>
    <Hello />
  </BrowserRouter>, 
  document.getElementById('app')
)