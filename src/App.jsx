import ContactsForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">📱 Phonebook</h1>

      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
