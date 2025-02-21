import { useEffect, useReducer, useRef } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css";
import classNames from "classnames/bind";
import { formReducer } from "./JournalFormState/formReducer";
import { INITIAL_DATA } from "./JournalFormState/boilerplate";
import {
   resetValidity,
   clearForm,
   submitForm,
   setValue
} from "./JournalFormState/actionGenerators";
import Input from "../Input/Input";
import Select from "./../Select/Select";
import DeleteButton from "../DeleteButton/DeleteButton";

const cx = classNames.bind(styles);

function JournalForm({ addPost, data, deletePost }) {
   const [formState, dispatchForm] = useReducer(formReducer, INITIAL_DATA);
   const { isValid, isFormReadyToSubmit, values } = formState;
   const titleRef = useRef(null);
   const dateRef = useRef(null);
   const contentRef = useRef(null);

   console.log(data);

   const focusError = (isValid) => {
      switch (true) {
         case !isValid.title:
            titleRef.current.focus();
            break;
         case !isValid.date:
            dateRef.current.focus();
            break;
         case !isValid.content:
            contentRef.current.focus();
            break;
      }
   };

   useEffect(() => {
      if (data.date) {
         dispatchForm(
            setValue({ ...data, date: data.date.toISOString().slice(0, 10) })
         );
         console.log(data);
      } else {
         dispatchForm(clearForm());
      }
   }, [data]);

   useEffect(() => {
      let timerID;
      if (!isValid?.content || !isValid?.date || !isValid?.title) {
         focusError(isValid);
         timerID = setTimeout(() => {
            dispatchForm(resetValidity());
         }, 2000);
      }

      return () => {
         clearTimeout(timerID);
      };
   }, [isValid]);

   useEffect(() => {
      if (isFormReadyToSubmit) {
         addPost(values);
         dispatchForm(clearForm());
      }
   }, [isFormReadyToSubmit, values, addPost]);

   const formSubmitHandler = (e) => {
      e.preventDefault();
      dispatchForm(submitForm());
   };

   const inputChangeHandler = (e) => {
      dispatchForm(setValue({ [e.target.name]: e.target.value }));
   };

   console.log("Форма ререндер");

   return (
      <form
         action=""
         className={styles["journal-form"]}
         onSubmit={formSubmitHandler}
         id="postForm"
      >
         <div className={cx("input-row")}>
            <Input
               type="text"
               name="title"
               ref={titleRef}
               value={values.title}
               onChange={inputChangeHandler}
               appearence="title"
               isValid={isValid.title}
            />
            {data.id && <DeleteButton onClick={deletePost} />}
         </div>
         <div className={cx("input-row")}>
            <label className={cx("input-label")} htmlFor="date">
               <img src="/calendar.svg" alt="Иконка календаря" />
               <span>Дата</span>
            </label>
            <Input
               type="date"
               name="date"
               id="date"
               ref={dateRef}
               onChange={inputChangeHandler}
               value={values.date}
               appearence="date"
               isValid={isValid.date}
            />
         </div>
         <div className={cx("input-row")}>
            <label className={cx("input-label")} htmlFor="tag">
               <img src="/folder.svg" alt="Иконка папки" />
               <span>Папка</span>
            </label>
            {/* <Input
               type="text"
               name="tag"
               id="tag"
               onChange={inputChangeHandler}
               appearence="tag"
               value={values.tag}
            /> */}
            <Select
               name="folder"
               id="folder"
               onChange={inputChangeHandler}
               value={values.folder}
            />
         </div>

         <textarea
            name="content"
            rows="10"
            cols="30"
            ref={contentRef}
            onChange={inputChangeHandler}
            value={values.content}
            className={cx({
               input: true,
               invalid: !isValid.content
            })}
         ></textarea>
         <Button text="Сохранить" isAccent={false} />
      </form>
   );
}

export default JournalForm;
