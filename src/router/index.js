import React from 'react';

import {Route, Switch, withRouter} from 'react-router-dom';

import Home from '@/page/Home'
import Routte from '@/page/Route'
import NotFound from '@/page/NotFound'

// exact 表示严格匹配
// Switch 表示 route 之间是互斥的
const requireAuth = (nextState, replace) => {
  replace({ pathname: '/' })
}
export default () => (
  <div className="route_index">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/roat/:id" component={(Routte)} onEnter={requireAuth}/>
      <Route component={NotFound} />
    </Switch>
  </div>
)