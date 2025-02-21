import styles from "./Select.module.css";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

function Select({ ...props }) {
   return (
      <select {...props} className={cl("option")}>
         <option value="1">Путешествия</option>
         <option value="2">Походы</option>
      </select>
   );
}

export default Select;
