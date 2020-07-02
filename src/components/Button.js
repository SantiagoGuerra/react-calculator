import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, wide, color } = props;

  return (
    <button className={`button ${wide ? 'button-double' : ''}`} type="button" style={{ background: color }}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: '#ff793f',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
