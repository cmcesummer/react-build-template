import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Home from '@/page/Home'
import Routte from '@/page/Route'
import NotFound from '@/page/NotFound'

// exact 表示严格匹配
// Switch 表示 route 之间是互斥的
export default () => (
  <div className="route_index">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/roat" component={Routte} />
      <Route component={NotFound} />
    </Switch>
  </div>
)