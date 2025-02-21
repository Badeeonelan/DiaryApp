import CardButton from "../CardButton/CardButton";
import styles from "./JournalAddButton.module.css";
import plus from "/Plus.svg";

function JournalAddButton({ setItem }) {
   return (
      <CardButton
         onClick={() => setItem({})}
         className={styles["journal-add__wrapper"]}
      >
         <img src={plus} alt="add new journey" className={styles["add-icon"]} />
         <div className={styles["journal-add"]}>Новое воспоминание</div>
      </CardButton>
   );
}

export default JournalAddButton;
