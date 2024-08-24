/* eslint-disable react/prop-types */
import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const filterId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={css.field}
        id={filterId}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
