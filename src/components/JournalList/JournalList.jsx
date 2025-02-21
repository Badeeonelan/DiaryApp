import "./JournalList.css";
import JournalItem from "../JournalItem/JournalItem";
import { useContext, useMemo } from "react";
import { FolderContext } from "../../context/folder.context";
import sortPosts from "./sortPosts";

function JournalList({ posts, setItem }) {
   const { folderID } = useContext(FolderContext);
   const filteredAndSortedPosts = useMemo(
      () => posts.sort(sortPosts).filter((el) => el.folder == folderID),
      [posts, folderID]
   );

   if (posts.length === 0) {
      return (
         <div className="journal-list">
            <p>Добавьте свой первый пост!</p>
         </div>
      );
   }

   if (posts.length > 0) {
      return (
         <div className="journal-list">
            {filteredAndSortedPosts.map((el) => (
               <JournalItem data={el} key={el.id} onClick={() => setItem(el)} />
            ))}
         </div>
      );
   }
}

export default JournalList;
