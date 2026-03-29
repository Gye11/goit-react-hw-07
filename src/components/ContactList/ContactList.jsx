import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  if (contacts.length === 0) {
    return <p className="status">No contacts found</p>;
  }

  return (
    <ul className="list">
      {contacts.map((contact) => (
        <li key={contact.id} className="item">
          <span className="contact-text">
            {contact.name}: {contact.number}
          </span>

          <button
            className="btn-delete"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
