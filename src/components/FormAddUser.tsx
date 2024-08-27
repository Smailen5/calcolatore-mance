import CircleLoading from "@/components/CircleLoading";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { number, object, string } from "yup";
import { Button } from "../components/ui/button";
import { useGlobalContext } from "../utils/contex";
import { v4 as uuidv4 } from "uuid";

const validationSchema = object({
  id: string().default(uuidv4()),
  name: string()
    .required("Cosa?... Non hai un nome?")
    .min(4, "Il nome è troppo breve. (min. 4 caratteri)").max(10, "Il nome è troppo lungo. (max. 10 caratteri)"),
  anniServizio: number()
    .required("Non stai lavorando?")
    .min(1, "Anni servizio non validi"),
  contratto: string().required("Cosa?... Non hai un contratto? 🚨"),
});

const initialValues = {
  id: "",
  name: "",
  anniServizio: "",
  contratto: "",
};

const FormAddUser = () => {
  const { setDataUser, isSave, setIsSave } = useGlobalContext();
  // console.log(spazioOccupato);

  // console.log(uuidv4())

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        // genera un id univoco
        const newUser = {...values, id: uuidv4()}
        // salva i dati degli utenti
        setDataUser((prevData) => [...prevData, newUser]);
        // attende prima di resettare il form ai valori iniziali
        setTimeout(() => {
          resetForm();
          // serve per poter aggiornare il bottone del form mentre invia i dati
          setSubmitting(false);
          setIsSave(true);
        }, 500);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form
          className="flex flex-col items-start gap-4 rounded-md bg-white p-4 shadow-lg lg:flex-1"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Nome Dipendente/User */}
          <label htmlFor="name">Nome dipendente*</label>
          <Field
            id="name"
            type="text"
            name="name"
            autoComplete="name"
            className="w-full rounded-md border border-gray-400 p-2"
          />
          <ErrorMessage name="name" component="p" className="text-red-500" />

          {/* Anni di lavoro svolto */}
          <label htmlFor="anniServizio">Anni di lavoro*</label>
          <Field
            id="anniServizio"
            type="number"
            name="anniServizio"
            className="w-full rounded-md border border-gray-400 p-2"
          />
          <ErrorMessage
            name="anniServizio"
            component="p"
            className="text-red-500"
          />

          {/* Tipo di contratto a scelta fra stagionale e a chiamata */}
          <div className="space-y-2">
            <p>Tipo di contratto*:</p>
            <div className="flex items-center gap-2">
              <Field
                id="stagionale"
                name="contratto"
                type="radio"
                value="stagionale"
              />
              <label htmlFor="stagionale">Stagionale</label>
            </div>
            <div className="flex items-center gap-2">
              <Field
                id="chiamata"
                name="contratto"
                type="radio"
                value="chiamata"
              />
              <label htmlFor="chiamata">A chiamata</label>
            </div>
            <ErrorMessage
              name="contratto"
              component="p"
              className="text-red-500"
            />
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <p className="flex items-center gap-2">
                <CircleLoading />
                Salvataggio in corso...
              </p>
            ) : (
              "Salva"
            )}
          </Button>
          {isSave && (
            <p className="text-green-500">Utente salvato con successo</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormAddUser;
