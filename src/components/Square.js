import React from 'react';
import './square.css'

class Square extends React.Component {
  state = {
    value: null
  }
  
  updateState = () => {
    this.setState({
      value: 'X'
    });
  }

  render() {
    return (
      <button className="square" 
      onClick={() =>this.updateState()}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;