/* eslint-disable react/prop-types */
import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <li className={css.item}>
      <div className={css.userData}>
        <p className={css.line}>
          <IoMdPerson />
          {name}
        </p>
        <p className={css.line}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
