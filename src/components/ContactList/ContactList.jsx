import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector} from "react-redux";
import {selectError, selectFilteredContacts, selectLoading} from "../../redux/contactsSlice.js";

function ContactList( ) {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const filteredContacts = useSelector(selectFilteredContacts);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className={styles.error}>{error}</p>;
    if (filteredContacts === null) return null;
    if (filteredContacts.length === 0) return <p className={styles.emptyMessage}>No contacts found.</p>;

  return (
      <div className={styles.container}>
          {filteredContacts.map((c) => (
              <Contact key={c.id} contact={c} />
          ))}
      </div>
  );
}

export default ContactList;
