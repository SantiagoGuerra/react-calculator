import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {

  return (
    <div className="panel">
      <div className="group-button">
        <Button name="AC" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="+/-" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="%" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} />
      </div>
      <div className="group-button">
        <Button name="7" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="8" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="9" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="X" clickHandler={clickHandler} />
      </div>
      <div className="group-button">
        <Button name="4" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="5" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="6" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div className="group-button">
        <Button name="1" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="2" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="3" color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div className="group-button">
        <Button name="0" wide color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="." color="#dfe4ea" clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
