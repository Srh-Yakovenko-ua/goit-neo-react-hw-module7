import styles from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import {getContactsThunk} from "../../redux/contactsOps.js";
import {useDispatch} from "react-redux";
import {useEffect} from "react";



function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList
      />
    </div>
  );
}

export default App;
