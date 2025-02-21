import styles from "./Header.module.css";
import classNames from "classnames/bind";
import FolderSelect from "../FolderSelect/FolderSelect";

const cl = classNames.bind(styles);

function Header() {
   return (
      <header className={cl("header")}>
         <img src="/Personal Journal.svg" alt="Логотип приложения" />
         <FolderSelect name="folder" id="folder" />
      </header>
   );
}

export default Header;
