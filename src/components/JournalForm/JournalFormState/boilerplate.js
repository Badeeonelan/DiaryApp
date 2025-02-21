export const SET_VALUE = "SET_VALUE";
export const RESET_VALIDITY = "RESET_VALIDITY";
export const SUBMIT = "SUBMIT";
export const CLEAR = "CLEAR";

export const INITIAL_DATA = {
   isValid: {
      title: true,
      date: true,
      content: true,
      folder: true
   },

   values: {
      content: "",
      title: "",
      date: "",
      folder: "1"
   },

   isFormReadyToSubmit: false
};
