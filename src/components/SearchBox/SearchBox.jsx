import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/store";

const SearchBox = () => {
  const filterId = useId();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);

  const handleFilter = (e) => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  return (
    <div className={css.container}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={css.field}
        id={filterId}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;
