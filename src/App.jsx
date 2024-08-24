import { useEffect, useState } from "react";
import ContactForm from "./components/ContackForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [list, setList] = useState(() => {
    const savedList = window.localStorage.getItem("PhoneList");
    if (savedList !== null) {
      return JSON.parse(savedList);
    } else return [];
  });
  const onAddContact = (values) => {
    setList((prevList) => [...prevList, values]);
  };
  const onDeleteContact = (value) => {
    setList(list.filter((listitem) => listitem.id !== value));
  };

  const [filter, setFilter] = useState("");

  const visibleList = list.filter((listitem) =>
    listitem.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("PhoneList", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox onFilter={setFilter} />
      <ContactList list={visibleList} onDeleteContact={onDeleteContact} />
    </div>
  );
};

export default App;
