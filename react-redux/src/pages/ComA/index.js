import React, { Component } from 'react';

import {connect} from 'react-redux'

class ComA extends Component {

  handleClick = () => {
    console.log('ComA: ', this.props)
    this.props.sendAction()
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> + </button>      
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      dispatch({
        type: 'send_action'  
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(ComA);