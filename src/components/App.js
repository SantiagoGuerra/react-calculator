import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    this.setState(state => calculate(state.next, buttonName))
  }

  render() {

    const { total } = this.state;

    return (
      <div className="calculator">
        <Display result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
