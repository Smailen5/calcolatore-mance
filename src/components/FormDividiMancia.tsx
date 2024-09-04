import { Field, Form, Formik } from "formik";
import { number, object } from "yup";
import { Button } from "./ui/button";

const validationSchema = object({
  mancia: number().required("...Niente mance? 😭"),
});

const initialValues = {
  mancia: "",
};

type FormDividiManciaProps = {
  setManciaTotale: React.Dispatch<React.SetStateAction<number>>
}

const FormDividiMancia:React.FC<FormDividiManciaProps> = ({setManciaTotale}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const mancia = parseFloat(values.mancia);
        setManciaTotale(mancia)
      }}
    >
      {() => (
        <Form className="flex flex-col items-start gap-4 rounded-md bg-white p-4 shadow-lg">
          <label htmlFor="mancia">Inserisci il totale delle mance</label>
          <Field
            type="number"
            placeholder="Inserisci la tua mance"
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
            name="mancia"
            id="mancia"
          />
          <Button type="submit" className="w-full">
            Calcola
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormDividiMancia;
