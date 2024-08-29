import { Button } from "./ui/button";
import { useGlobalContext } from "../utils/contex";
import { useEffect, useState } from "react";

type FormAddHoursProps = {
  nameUser: string;
  handleAddHours: () => void;
  isVisible: boolean;
};

const FormAddHours: React.FC<FormAddHoursProps> = ({
  nameUser,
  handleAddHours,
  isVisible,
}) => {
  const { hours, setHours } = useGlobalContext();
  const [saveHour, setSaveHour] = useState(false);

  // gestisce il messaggio se le ore sono state salvate
  useEffect(() => {
    if (saveHour) {
      const timer = setTimeout(() => {
        setSaveHour(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [saveHour]);

  const handleSaveHours = () => {
    handleAddHours();
    setSaveHour(true);
  };

  return (
    <>
      {/* input per aggiungere le ore solo se ce un utente selezionato */}
      {isVisible && (
        <div className="flex flex-col gap-6 rounded-md border p-4 shadow-md">
          <h3>
            Utente selezionato:{" "}
            <span className="font-bold capitalize">{nameUser}</span>
          </h3>
          <input
            type="number"
            name="oreLavorate"
            value={hours === 0 ? "" : hours}
            onChange={(e) => setHours(Number(e.target.value))}
            placeholder="Inserisci le ore lavorate"
            className="w-full rounded-md border border-slate-300 p-2"
          />
          <Button onClick={handleSaveHours}>Aggiungi ore</Button>
        </div>
      )}
      {saveHour && (
        <div className="rounded-md border p-4 shadow-md">
          <p className="text-center text-green-400">
            Ore aggiunte correttamente
          </p>
        </div>
      )}
    </>
  );
};

export default FormAddHours;
