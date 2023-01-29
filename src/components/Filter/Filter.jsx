import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {
  return (
    <div>
      <label>
        Find contact by name
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
