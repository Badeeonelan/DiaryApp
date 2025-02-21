import "./App.css";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import Body from "./layouts/Body/Body";
import Header from "./components/Header/Header";
import JournalList from "./components/JournalList/JournalList";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalForm from "./components/JournalForm/JournalForm";
import { useLocalStorage } from "./hooks/useLocalStorage";
import JournalFolderTitle from "./components/JournalFolderTitle/JournalFolderTitle";
import { useState } from "react";

const configurePostsDate = (posts) => {
   if (!posts) {
      return [];
   }
   return posts.map((el) => ({
      ...el,
      date: new Date(el.date)
   }));
};

function App() {
   const [posts, addData] = useLocalStorage("Data");
   const [selectedItem, setSelectedItem] = useState({});

   const addPost = (data) => {
      if (!data.id) {
         addData([
            ...posts,
            {
               ...data,
               id:
                  posts.length > 0 ? Math.max(...posts.map((i) => i.id)) + 1 : 1
            }
         ]);
      } else {
         addData([
            ...configurePostsDate(posts).map((i) => {
               if (i.id === data.id) {
                  return {
                     ...data
                  };
               }
               return i;
            })
         ]);
      }
   };

   const deletePost = () => {
      addData([
         ...configurePostsDate(posts).filter(
            (post) => post.id !== selectedItem.id
         )
      ]);
   };

   return (
      <div className="app">
         <LeftPanel>
            <Header />
            <JournalAddButton setItem={setSelectedItem} />
            <JournalFolderTitle />
            <JournalList
               posts={configurePostsDate(posts)}
               setItem={setSelectedItem}
            />
         </LeftPanel>

         <Body>
            <JournalForm
               addPost={addPost}
               data={selectedItem}
               deletePost={deletePost}
            />
         </Body>
      </div>
   );
}

export default App;
