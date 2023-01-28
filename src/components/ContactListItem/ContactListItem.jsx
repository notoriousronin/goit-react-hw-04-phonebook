import React from 'react';
import PropTypes from 'prop-types';

export default function ContactListItem({ name, number }) {
  return (
    <li>
      {name}: {number}
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
