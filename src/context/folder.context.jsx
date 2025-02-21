import { createContext, useState } from "react";

export const FolderContext = createContext();

export default function FolderContextProvider({ children }) {
   const [folderID, setFolderID] = useState(1);

   return (
      <FolderContext.Provider value={{ folderID, setFolderID }}>
         {children}
      </FolderContext.Provider>
   );
}
