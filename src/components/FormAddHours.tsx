import { Button } from "./ui/button";
import { useGlobalContext } from "../utils/contex";
import { useEffect, useState } from "react";
import { Field, Formik } from "formik";
import { number, object } from "yup";

type FormAddHoursProps = {
  nameUser: string;
  handleAddHours: () => void;
  isVisible: boolean;
};

const initialValues = {
  oreLavorate: "",
};

const validationSchema = object({
  oreLavorate: number().required(),
});

const FormAddHours: React.FC<FormAddHoursProps> = ({
  nameUser,
  handleAddHours,
  isVisible,
}) => {
  // stati e useGlobalContext
  const { hours, setHours, setDataUser } = useGlobalContext();
  const [saveHour, setSaveHour] = useState(false);

  // gestisce il messaggio se le ore sono state salvate
  useEffect(() => {
    const timer = setTimeout(() => {
      setSaveHour(true);
    }, 1000);
    return clearTimeout(timer);
  }, [hours, saveHour]);

  return (
    <>
      {/* input per aggiungere le ore solo se ce un utente selezionato */}
      {isVisible && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // lo stato viene comunque aggiornato correttamente anche senza Formik
          }}
        >
          <div className="flex flex-col gap-6 rounded-md border p-4 shadow-md">
            <h3>
              Utente selezionato:{" "}
              <span className="font-bold capitalize">{nameUser}</span>
            </h3>
            <Field
              type="number"
              name="oreLavorate"
              value={hours === 0 ? "" : hours}
              onChange={(e) => setHours(Number(e.target.value))}
              placeholder="Inserisci le ore lavorate"
              className="w-full rounded-md border border-slate-300 p-2"
            />
            <Button onClick={() => handleAddHours()}>Aggiungi ore</Button>
            {saveHour && (
              <p className="text-green-400">Ore aggiunte correttamente</p>
            )}
          </div>
        </Formik>
      )}
    </>
  );
};

export default FormAddHours;
