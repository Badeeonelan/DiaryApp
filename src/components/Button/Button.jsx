import { memo } from "react";
import styles from "./Button.module.css";

function Button({ text, isAccent, ...props }) {
   // console.log("Button");

   return (
      <button
         {...props}
         className={`${styles.button} ${isAccent ? styles.accent : ""}`}
      >
         {text}
      </button>
   );
}

export default memo(Button);
