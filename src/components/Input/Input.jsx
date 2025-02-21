import { forwardRef } from "react";
import styles from "./input.module.css";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const Input = forwardRef(function Input(
   { type, name, value, onChange, appearence, isValid = true, ...props },
   ref
) {
   return (
      <input
         {...props}
         type={type}
         name={name}
         value={value}
         onChange={onChange}
         ref={ref}
         className={cx({
            input: true,
            title: appearence === "title",
            invalid: !isValid
         })}
      />
   );
});

export default Input;
