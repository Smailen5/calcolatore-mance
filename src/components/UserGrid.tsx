import { useGlobalContext, UserFormValues } from "@/utils/context";
import { useState } from "react";
import SingleUser from "./SingleUser";
import { removeUser } from "@/utils/utente/rimuoviUtente";

type UserGridProps = {
  noButton?: boolean;
  data?: UserFormValues[];
  selectable?: boolean;
  isHours?: boolean;
};

const UserGrid = ({ noButton, data, selectable, isHours }: UserGridProps) => {
  const { setDataUser, setIsSave, setSelectedUser, setNameUser } =
    useGlobalContext();
  const [messageUser, setMessageUser] = useState("Ecco tutti gli utenti:");

  // se non ci sono user visualizza un messaggio
  if (!data || data.length === 0) {
    return <p className="text-center">Non hai ancora aggiunto dipendenti</p>;
  }

  // gestisce la selezione del user
  const handleSelectUser = (id: string) => {
    const selectedUser = data.find((user) => user.id === id);
    // console.log(selectedUser);

    if (selectedUser) {
      setSelectedUser(selectedUser.id);
      setNameUser(selectedUser.name);
      // console.log("utente selezionato");
    }
  };

  // rimuove user selezionato e aggiorna i dati
  const handleRimuoviUtente = (id: string, name: string) => {
    removeUser({
      id,
      name,
      data,
      setIsSave,
      setMessageUser,
      setDataUser,
    });
  };

  return (
    <>
      <p className="text-center">{messageUser}</p>
      <section className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {data &&
          data.length > 0 &&
          data.map((utente) => (
            <SingleUser
              key={utente.id}
              {...utente}
              remove={() => handleRimuoviUtente(utente.id, utente.name)}
              selectable={selectable}
              onSelect={() => handleSelectUser(utente.id)}
              noButton={noButton}
              isHours={isHours}
            />
          ))}
      </section>
    </>
  );
};

export default UserGrid;
