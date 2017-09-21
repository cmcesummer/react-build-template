import React, {Component} from 'react'

export default class Routte extends Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>Routte</h1>
      </div>
    )
  }
}