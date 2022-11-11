import {  Field } from "formik";
const FormikTextField = ({ name, type, ...props }) => {
  return (
      <Field
        name={name}
        type={type}
        {...props}
      />
  );
};

export default FormikTextField;
