import React, { Component } from 'react';

import {connect} from 'react-redux'

class ComB extends Component {
  render() {
    return (
      <div>
        {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('comB', state);
  return state.count;
}

export default connect(mapStateToProps)(ComB);