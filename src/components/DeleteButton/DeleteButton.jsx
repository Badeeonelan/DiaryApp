import styles from "./DeleteButton.module.css";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

function DeleteButton({ ...props }) {
   return (
      <button {...props} className={cl("delete-button")}>
         <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M16.6667 3.33334H3.33335C2.41288 3.33334 1.66669 4.07954 1.66669 5.00001V5.83334C1.66669 6.75382 2.41288 7.50001 3.33335 7.50001H16.6667C17.5872 7.50001 18.3334 6.75382 18.3334 5.83334V5.00001C18.3334 4.07954 17.5872 3.33334 16.6667 3.33334Z"
               stroke="white"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M3.33331 7.5V15C3.33331 15.442 3.50891 15.866 3.82147 16.1785C4.13403 16.4911 4.55795 16.6667 4.99998 16.6667H15C15.442 16.6667 15.8659 16.4911 16.1785 16.1785C16.4911 15.866 16.6666 15.442 16.6666 15V7.5"
               stroke="white"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
            <path
               d="M8.33331 10.8333H11.6666"
               stroke="white"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </button>
   );
}

export default DeleteButton;
