import * as React from "react";
import { Field } from "formik";

export default function FormikTextArea({ name, type, ...props }) {
  return (
      <Field
        name={name}
        aria-label="empty textarea"
        {...props}
       style={{border : "1px solid #d4d6d2" , borderRadius : "05px"}}
      />
  );
}
