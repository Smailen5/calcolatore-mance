import { useGlobalContext } from "@/utils/contex";
import SingleUser from "./SingleUser";
import { useState } from "react";

const UserGrid = () => {
  const { dataUser, setDataUser } = useGlobalContext();
  const [messageUser, setMessageUser] = useState("Ecco tutti gli utenti:");

  // se non ci sono user visualizza un messaggio
  if (!dataUser || dataUser.length === 0) {
    return <p className="text-center">Non hai ancora aggiunto dipendenti</p>;
  }

  // rimuove user selezionato e aggiorna i dati
  const removeUser = (id: string, name: string) => {
    const newUserList = dataUser.filter((user) => user.id !== id);
    setDataUser(newUserList);
    // aggiungi un messaggio di conferma con setTimeout
    setMessageUser(`Utente eliminato: ${name} 👋`);
    console.log(name)
    const timer = setTimeout(() => {
      setMessageUser("Ecco tutti gli utenti:");
    }, 1500);
    return () => clearTimeout(timer);
  };

  return (
    <>
      {/* messaggio dinamico che cambia se viene eliminato un user */}
      <p className="text-center">{messageUser}</p>
      <section className="grid grid-cols-2 gap-2">
        {/* se dataUser ha dei dati visualizza gli user */}
        {dataUser &&
          dataUser.length > 0 &&
          dataUser.map((utente) => (
            <SingleUser
              // attenzione a dare un id univoco o removeUser rimuovera tutti gli utenti con lo stesso nome
              key={utente.id}
              {...utente}
              remove={() => removeUser(utente.id, utente.name)}
            />
          ))}
      </section>
    </>
  );
};

export default UserGrid;
