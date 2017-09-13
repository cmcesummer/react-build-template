import React, {Component} from 'react';
import {render} from 'react-dom'
import '@/assets/css/les.less'

class Root extends Component {
  render() {
    const styles = {
      color: 'white'
    }
    return <div className="test test2">
      <span className="demo demo2" style={styles}>wwww</span>
    </div>
  }
}

render(<Root/>, document.getElementById('app'))