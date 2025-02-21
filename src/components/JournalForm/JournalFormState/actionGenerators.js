import { CLEAR, RESET_VALIDITY, SET_VALUE, SUBMIT } from "./boilerplate";

export function resetValidity() {
   return {
      type: RESET_VALIDITY
   };
}

export function clearForm() {
   return {
      type: CLEAR
   };
}

export function submitForm() {
   return {
      type: SUBMIT
   };
}

export function setValue(payload) {
   return {
      type: SET_VALUE,
      payload
   };
}
