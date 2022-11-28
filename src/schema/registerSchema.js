import * as Yup from "yup";

const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid firstname")
    .required("First name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Invalid lastname")
    .required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string().required("Password is required"),
  password2: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "Passwords do not match")
});

export default registerValidationSchema;