import {
   SUBMIT,
   RESET_VALIDITY,
   SET_VALUE,
   CLEAR,
   INITIAL_DATA
} from "./boilerplate";

export function formReducer(state, action) {
   switch (action.type) {
      case SET_VALUE: {
         return {
            ...state,
            values: {
               ...state.values,
               ...action.payload
            }
         };
      }
      case RESET_VALIDITY:
         return { ...state, isValid: INITIAL_DATA.isValid };
      case SUBMIT: {
         const contentValidity = state.values.content?.trim().length;
         const titleValidity = state.values.title?.trim().length;
         const dateValidity = state.values.date;
         const folderValidity = state.values.folder;

         const isFormValid =
            contentValidity && titleValidity && dateValidity && folderValidity;

         return {
            ...state,
            isValid: {
               title: titleValidity,
               content: contentValidity,
               date: dateValidity,
               folder: folderValidity
            },

            isFormReadyToSubmit: isFormValid
         };
      }

      case CLEAR: {
         return INITIAL_DATA;
      }
   }
}
