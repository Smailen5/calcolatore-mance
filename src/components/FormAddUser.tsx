import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Button } from "../components/ui/button";

const validationSchema = object({
  name: string()
    .required("Cosa?... Non hai un nome?")
    .min(4, "Il nome è troppo breve. (min. 4 caratteri)"),
  email: string()
    .email("Hmm... Questa email non sembra valida")
    .required("Oops, l'email è necessaria per contattarti."),
  message: string()
    .required("Ehi! Qualcosa devi pur scrivere")
    .min(
      100,
      "Il messaggio è troppo breve. Prova a scrivere un po' di più! (min. 100 caratteri)",
    ),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};
const FormAddUser = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form
          className="flex flex-col items-start gap-4 rounded-md bg-white p-4 shadow-lg lg:flex-1"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="name">Nome</label>
          <Field
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            className="w-full rounded-md border border-gray-400 p-2"
          />
          <ErrorMessage name="name" component="p" className="text-red-500" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            className="w-full rounded-md border border-gray-400 p-2"
          />
          <ErrorMessage name="email" component="p" className="text-red-500" />

          <label htmlFor="message">Messaggio</label>
          <Field
            id="message"
            as="textarea"
            name="message"
            type="text"
            autoComplete="off"
            rows={10}
            className="w-full resize-none rounded-md border border-gray-400 p-2"
          />

          <ErrorMessage name="message" component="p" className="text-red-500" />

          <Button type="submit" color="primary" className="w-full">
            Invia
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormAddUser;
