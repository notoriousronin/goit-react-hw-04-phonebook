import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <div>
      <label>
        Find contact by name
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
