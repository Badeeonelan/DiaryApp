import styles from "./CardButton.module.css";
import classNames from "classnames/bind";

const cl = classNames.bind(styles);

function CardButton({ children, className, ...props }) {
   return (
      <button
         {...props}
         className={cl({
            "card-button": true,
            [className]: className
         })}
      >
         {children}
      </button>
   );
}

export default CardButton;
