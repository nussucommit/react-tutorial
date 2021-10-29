import { Field, Form, Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: "",
  user: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  user: yup.string().required("Required"),
});

const SubmitForm = ({ onFormSubmit }) => {
  const handleSubmit = (values, formikHelpers) => {
    const { name } = values;
    if (name === "") return;
    onFormSubmit(name);
    formikHelpers.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" placeholder="Enter Task" name="name" />

          <Field type="text" placeholder="Enter Name" name="user" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SubmitForm;
