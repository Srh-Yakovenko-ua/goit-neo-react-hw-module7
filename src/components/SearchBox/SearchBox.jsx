import styles from "./SearchBox.module.css";
import {changeFilter} from "../../redux/filtersSlice.js";
import {useDispatch} from "react-redux";

function SearchBox() {
  const dispatch = useDispatch();

  const handleSearchTermChange = (term) => {
        dispatch(changeFilter(term));
    };

 return (
    <div className={styles.container}>
      Find contacts by name:
      <br />
      <input type="text" onChange={(e) => handleSearchTermChange(e.target.value)} />
    </div>
  );
}

export default SearchBox;
