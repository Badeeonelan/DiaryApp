import styles from "./Select.module.css";
import classNames from "classnames/bind";
import { useContext } from "react";
import { FolderContext } from "../../context/folder.context";
import Select from "../Select/Select";

const cl = classNames.bind(styles);

function FolderSelect({ ...props }) {
   const { folderID, setFolderID } = useContext(FolderContext);

   const changeFolder = (e) => {
      setFolderID(Number(e.target.value));
   };

   return (
      <Select
         {...props}
         className={cl("option")}
         value={folderID}
         onChange={changeFolder}
      >
         <option value="1">Путешествия</option>
         <option value="2">Походы</option>
      </Select>
   );
}

export default FolderSelect;
