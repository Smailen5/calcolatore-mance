import { Button } from "./ui/button";
import { useGlobalContext } from "../utils/contex";

type FormAddHoursProps = {
  nameUser: string;
  handleHours: () => void;
  isVisible: boolean;
};

const FormAddHours: React.FC<FormAddHoursProps> = ({
  nameUser,
  handleHours,
  isVisible,
}) => {
  const { hours, setHours } = useGlobalContext();
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
            value={hours === 0 ? "" : hours}
            onChange={(e) => setHours(Number(e.target.value))}
            placeholder="Inserisci le ore lavorate"
            className="w-full rounded-md border border-slate-300 p-2"
          />
          <Button onClick={() => handleHours()}>Aggiungi ore</Button>
        </div>
      )}
    </>
  );
};

export default FormAddHours;
