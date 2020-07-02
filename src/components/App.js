import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next } = this.state;
    const show = next || total;
    return (
      <div className="calculator">
        <Display result={show} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
