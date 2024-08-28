import { useGlobalContext } from "@/utils/contex";
import SingleUser from "./SingleUser";
import { useState } from "react";
// import { Button } from "./ui/button";
import FormAddHours from "./FormAddHours";

const UserGrid = ({ noButton }: { noButton?: boolean }) => {
  const { dataUser, setDataUser, setIsSave, hours, setHours } = useGlobalContext();
  const [messageUser, setMessageUser] = useState("Ecco tutti gli utenti:");
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [nameUser, setNameUser] = useState<string>("");
  // const [hours, setHours] = useState<number | "">("");

  // se non ci sono user visualizza un messaggio
  if (!dataUser || dataUser.length === 0) {
    return <p className="text-center">Non hai ancora aggiunto dipendenti</p>;
  }

  // rimuove user selezionato e aggiorna i dati
  const removeUser = (id: string, name: string) => {
    const newUserList = dataUser.filter((user) => user.id !== id);
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
    const selectedUser = dataUser.find((user) => user.id === id);
    if (selectedUser) {
      setSelectedUser(id);
      setNameUser(selectedUser.name);
    }
    return nameUser;
  };

  // gestisce l'inserimento delle ore
  const handleAddHours = () => {
    // verifica che ci sia un utente selezionato e che l'input ore non sia vuoto
    if (selectedUser && hours) {
      const updatedUserList = dataUser.map((user) => {
        console.log("prova prima di return");
        if (user.id === selectedUser) {
          return {
            ...user,
            oreLavorate: (user.oreLavorate || 0) + hours,
          };
        }
        return user;
      });
      setDataUser(updatedUserList);
      setIsSave(true);
      setHours(0); // resetta input ore
      setNameUser(""); // resetta nome utente
      setSelectedUser(""); // resetta utente selezionato
    }
  };

  return (
    <>
      {/* compare solo se viene selezionato un utente */}
      <FormAddHours
        nameUser={nameUser}
        handleHours={handleAddHours}
        //  CONTROLLA BENE QUESTO, NON LO CAPISCO BENE
        isVisible={!!selectedUser}
      />
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
              onSelect={() => handleSelectUser(utente.id)}
              noButton={noButton}
            />
          ))}
      </section>
    </>
  );
};

export default UserGrid;
