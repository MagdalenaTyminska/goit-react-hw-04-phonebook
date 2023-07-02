import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, handleSearch }) => {
  return (
    <>
      <p className={css.filterTitle}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={handleSearch}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleSearch: PropTypes.func,
};

export default Filter;
