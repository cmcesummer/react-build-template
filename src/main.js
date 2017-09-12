import React, {Component} from 'react';
import {render} from 'react-dom'
import '@/assets/css/les.less'

class Root extends Component {
  render() {
    return <div className="test">
      <span className="demo">wwww</span>
    </div>
  }
}

render(<Root/>, document.getElementById('app'))