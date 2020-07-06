import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, wide, color, clickHandler,
}) => (
  <button className={`button ${wide ? 'button-double' : ''}`} type="button" style={{ background: color }} onClick={() => { clickHandler(name); }}>
    {name}
  </button>
);

Button.defaultProps = {
  wide: false,
  color: '#ff793f',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
