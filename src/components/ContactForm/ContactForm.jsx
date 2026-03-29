import { useDispatch } from "react-redux";
import { useState } from "react";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return;

    dispatch(addContact({ name, number }));

    setName("");
    setNumber("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input"
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button className="btn-add" type="submit">
        Add
      </button>
    </form>
  );
}
