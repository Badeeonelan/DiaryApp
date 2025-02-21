import { useEffect, useState } from "react";

export function useLocalStorage(key) {
   const [data, setData] = useState([]);

   useEffect(() => {
      if (!localStorage.getItem(key)) {
         localStorage.setItem(key, "");
      } else {
         const res = JSON.parse(localStorage.getItem(key));
         setData(res);
      }
   }, [key]);

   const saveData = (newData) => {
      localStorage.setItem(key, JSON.stringify(newData));
      console.log(newData);
      setData(newData);
   };

   return [data, saveData];
}
