import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Routte extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routeWillLeave
    )
  }

  routeWillLeave(nextLocation) {
    console.log(nextLocation);
    return `Leave for next Location ${nextLocation.pathname}`;
  }


  componentDidMount() {

  }




  render() {
    return (
      <div>
        <h1>Routte</h1>
      </div>
    )
  }
}

export default withRouter(Routte)