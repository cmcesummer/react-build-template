import React, {Component} from 'react';
import {render} from 'react-dom'
import '@/assets/css/les.less'
// import '@/assets/css/les.css'

class Root extends Component {
  render() {
    const styles = {
      color: 'white'
    }
    return <div className="test test2">
      <span className="demo demo2" >wwww</span>
    </div>
  }
}

render(<Root/>, document.getElementById('app'))