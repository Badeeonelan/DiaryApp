import { useContext } from "react";
import { FolderContext } from "../../context/folder.context";
import styles from "./JournalFolderTitle.module.css";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

export default function JournalFolderTitle() {
   const { folderID } = useContext(FolderContext);

   return (
      <div className={cl("container")}>
         <img src="/folder.svg" alt="Иконка папки" />
         <span className={cl("text")}>
            {folderID == 1 ? "Путешествия" : "Походы"}
         </span>
      </div>
   );
}
