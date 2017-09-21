import React, {Component} from 'react'
// import {browserHistory } from 'react-router-dom'

export default class Home extends Component {
  constructor(props) {
    super(props);
    contextTypes: {
      router: React.PropTypes.object
    }
  }

  

  goRoute() {
    this.context.router.push('/roat')
    // browserHistory.push('/roat')
  }

  render() {
    return (
      <div className="home_index">
     
        <span onClick={this.goRoute}>home_index</span>
          
      </div>
    )
  }

}