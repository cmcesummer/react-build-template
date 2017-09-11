import React, {Component} from 'react';
import {render} from 'react-dom'
import '@/assets/css/les.less'

class Root extends Component {
  render() {
    return <div className="test">
      <span className="demo">2121</span>
    </div>
  }
}

render(<Root/>, document.getElementById('app'))