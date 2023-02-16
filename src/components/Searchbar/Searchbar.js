import React from 'react';
import css from './Searchbar.module.css';
import { VscSearch } from 'react-icons/vsc';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit, handleChange }) => {
  return (
    <form className={css.searchbar} onSubmit={onSubmit}>
      <div className={css.search}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button className={css.icon} type="button">
          <VscSearch />
        </button>
      </div>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
