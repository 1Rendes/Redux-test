/* eslint-disable react/prop-types */
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ list, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {list.map(({ name, number, id }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
export default ContactList;
