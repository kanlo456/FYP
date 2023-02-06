import * as yup from "yup";

export const checkWorkNoteSchema = yup.object().shape({
  worknote: yup.string(),
});
