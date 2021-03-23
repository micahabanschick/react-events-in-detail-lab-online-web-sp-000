// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  render() {
    return <button onClick={ e => this.props.onReceiveCoordinates([e.clientX, e.clientY])} ></button>
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 39c600ded9dcf0f4faf67aa9b8dea7572c6631ad
