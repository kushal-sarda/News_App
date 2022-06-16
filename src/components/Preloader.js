import React, { Component } from 'react'
import Preloader from './Preloader.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Preloader} alt="Preloader" />
      </div>
    )
  }
}

export default Spinner