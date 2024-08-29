import { Button } from "./ui/button";
import { useGlobalContext } from "../utils/context";
import { useEffect, useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

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
  const { hours, setHours, setNameUser, setSelectedUser } = useGlobalContext();
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
    const timer = setTimeout(() => {
      closeModal();
    }, 1000);
    return () => clearTimeout(timer);
  };

  const closeModal = () => {
    setHours(0); // Resetta il valore delle ore
    setNameUser(""); // Resetta il nome dell'utente selezionato
    setSelectedUser(""); // Resetta l'utente selezionato
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative mx-auto max-w-md rounded-lg bg-background p-6">
            <Button
              variant={"destructive"}
              size={"icon"}
              className="absolute right-2 top-2 size-8 text-background"
              onClick={closeModal}
            >
              <Cross1Icon className="size-4" />
            </Button>
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
              className="mt-4 w-full rounded-md border border-slate-300 p-2"
            />
            <Button className="mt-4 w-full" onClick={handleSaveHours}>
              Aggiungi ore
            </Button>
            {saveHour && (
              <p className="mt-4 text-center text-green-400">
                Ore aggiunte correttamente
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FormAddHours;
