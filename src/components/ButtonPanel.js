import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="panel">
    <div className="group-button">
      <Button name="AC" color="#dfe4ea" />
      <Button name="+/-" color="#dfe4ea" />
      <Button name="%" color="#dfe4ea" />
      <Button name="÷" />
    </div>
    <div className="group-button">
      <Button name="7" color="#dfe4ea" />
      <Button name="8" color="#dfe4ea" />
      <Button name="9" color="#dfe4ea" />
      <Button name="X" />
    </div>
    <div className="group-button">
      <Button name="4" color="#dfe4ea" />
      <Button name="5" color="#dfe4ea" />
      <Button name="6" color="#dfe4ea" />
      <Button name="-" />
    </div>
    <div className="group-button">
      <Button name="1" color="#dfe4ea" />
      <Button name="2" color="#dfe4ea" />
      <Button name="3" color="#dfe4ea" />
      <Button name="+" />
    </div>
    <div className="group-button">
      <Button name="0" wide color="#dfe4ea" />
      <Button name="." color="#dfe4ea" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
