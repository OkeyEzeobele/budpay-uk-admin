import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

function ToggleSwitch({ option1Text, option2Text, onToggleChange, disabled = false }) {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (state) => {
    if (disabled) {
      return;
    }
    setToggleState(state);
    onToggleChange(state);
  };

  return (
    <div className={`toggle-switch ${disabled ? 'disabled' : ''}`}>
      <div className="toggle-switch-text" onClick={() => handleToggle(false)}>
        {option1Text}
      </div>
      <div className={`toggle-switch-slider ${toggleState ? 'active' : ''}`} />
      <div className="toggle-switch-text" onClick={() => handleToggle(true)}>
        {option2Text}
      </div>
    </div>
  );
}

ToggleSwitch.propTypes = {
  option1Text: PropTypes.string.isRequired,
  option2Text: PropTypes.string.isRequired,
  onToggleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  disabled: false,
};

export default ToggleSwitch;
