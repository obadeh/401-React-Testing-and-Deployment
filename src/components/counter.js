
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = {
      count: 0,
      numState:'',
    };

  }

    handleClick = e => {
      e.preventDefault();
      let count = this.state.count + 1;
      let numState = this.state.numState;
      if(count > 0){ numState = 'positive'; }
      if(count === 0){numState = 'zero';}

      this.setState({ count,numState });
    }
    handleClick2 = e => {
      e.preventDefault();
      let count = this.state.count - 1;
      let numState = this.state.numState;

      if(count < 0){ numState = 'negative';}
      if(count === 0){numState = 'zero';}

      this.setState({ count ,numState});
    }

    render() {
      return (
        <section>
          <h3>{this.state.count}</h3>
          <h2 className={this.state.numState}>{this.state.numState}</h2>
          <button className='b1' onClick={this.handleClick}><span>increment</span></button>
          <button className='b2' onClick={this.handleClick2}><span>decrement</span></button>
        </section>
      );
    }
}

export default Counter;