import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Home from '@/views/Home'
import Routte from '@/views/Route'
import NotFound from '@/views/NotFound'

export default () => {
  <div className="route_index">
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
}