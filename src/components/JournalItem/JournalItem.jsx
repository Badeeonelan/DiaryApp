import CardButton from "../CardButton/CardButton";
import "./JournalItem.css";

function JournalItem({ data, ...props }) {
   const header = data.title;
   const text = data.content;
   const date = data.date;
   const formatDateTime = new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
   }).format(date);

   return (
      <CardButton {...props} className="journal-item">
         <h2 className="journal-item__header">{header}</h2>
         <div className="journal-item__body">
            <div className="journal-item__date">{formatDateTime}</div>
            <div className="journal-item__text">{text}</div>
         </div>
      </CardButton>
   );
}

export default JournalItem;
