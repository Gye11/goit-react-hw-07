import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { fetchContacts } from "./redux/contactsOps";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1 className="title">📱 Phonebook</h1>

      <ContactsForm />
      <SearchBox />

      {loading && <p className="status">Loading...</p>}

      <ContactList />
    </div>
  );
}

export default App;
