import { useGlobalContext, UserFormValues } from "@/utils/contex";
import { useState } from "react";
import SingleUser from "./SingleUser";

type UserGridProps = {
  noButton?: boolean;
  data?: UserFormValues[];
  selectable?: boolean;
};

const UserGrid = ({ noButton, data, selectable }: UserGridProps) => {
  const { setDataUser, setIsSave, setSelectedUser, setNameUser } =
    useGlobalContext();
  const [messageUser, setMessageUser] = useState("Ecco tutti gli utenti:");

  // se non ci sono user visualizza un messaggio
  if (!data || data.length === 0) {
    return <p className="text-center">Non hai ancora aggiunto dipendenti</p>;
  }

  // rimuove user selezionato e aggiorna i dati
  const removeUser = (id: string, name: string) => {
    const newUserList = data.filter((user) => user.id !== id);
    setDataUser(newUserList);
    setIsSave(true);
    // aggiungi un messaggio di conferma con setTimeout
    setMessageUser(`Utente eliminato: ${name} 👋`);
    console.log(name);
    const timer = setTimeout(() => {
      setMessageUser("Ecco tutti gli utenti:");
    }, 1500);
    return () => clearTimeout(timer);
  };

  // gestisce la selezione del user
  const handleSelectUser = (id: string) => {
    const selectedUser = data.find((user) => user.id === id);
    console.log(selectedUser);

    if (selectedUser) {
      setSelectedUser(selectedUser.id);
      setNameUser(selectedUser.name);
      console.log("utente selezionato");
    }
    // return nameUser;
  };

  return (
    <>
      <p className="text-center">{messageUser}</p>
      <section className="grid grid-cols-2 gap-2">
        {data &&
          data.length > 0 &&
          data.map((utente) => (
            <SingleUser
              key={utente.id}
              {...utente}
              remove={() => removeUser(utente.id, utente.name)}
              selectable={selectable}
              onSelect={() => handleSelectUser(utente.id)}
              noButton={noButton}
            />
          ))}
      </section>
    </>
  );
};

export default UserGrid;
