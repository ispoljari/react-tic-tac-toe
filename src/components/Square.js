import React from 'react';
import './square.css'

class Square extends React.Component {
  state = {
    value: null
  }
  
  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;