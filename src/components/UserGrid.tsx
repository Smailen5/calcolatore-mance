import { useGlobalContext } from "@/utils/contex";
import { useState } from "react";
// import FormAddHours from "./FormAddHours";
import SingleUser from "./SingleUser";
import { UserFormValues } from "@/utils/contex";

type UserGridProps = {
  noButton?: boolean;
  data?: UserFormValues[];
};

const UserGrid = ({ noButton, data }: UserGridProps) => {
  const {
    // dataUser,
    setDataUser,
    setIsSave,
    // hours,
    // setHours,
    // setDataUserHoursSession,
  } = useGlobalContext();
  const [messageUser, setMessageUser] = useState("Ecco tutti gli utenti:");
  // const [selectedUser, setSelectedUser] = useState<string>("");
  // const [nameUser, setNameUser] = useState<string>("");

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
  // const handleSelectUser = (id: string) => {
  //   const selectedUser = dataUser.find((user) => user.id === id);
  //   if (selectedUser) {
  //     setSelectedUser(id);
  //     setNameUser(selectedUser.name);
  //   }
  //   return nameUser;
  // };

  // gestisce l'inserimento delle ore
  // const handleAddHours = () => {
  //   // Verifica che ci sia un utente selezionato e che l'input ore non sia vuoto
  //   if (selectedUser && hours) {
  //     const updatedUserList = dataUser.map((user) => {
  //       if (user.id === selectedUser) {
  //         return {
  //           ...user,
  //           oreLavorate: hours, // Aggiorna oreLavorate
  //         };
  //       }
  //       return user; // Ritorna gli altri utenti senza modifiche
  //     });
  //     // setDataUser(updatedUserList); // Aggiorna lo stato con la nuova lista utenti
  //     setDataUserHoursSession(updatedUserList); // Aggiorna sessionStorage con gli stessi dati di localStorage
  //     setIsSave(true); // Segnala che ci sono modifiche da salvare
  //     setHours(0); // Resetta il valore delle ore
  //     setNameUser(""); // Resetta il nome dell'utente selezionato
  //     setSelectedUser(""); // Resetta l'utente selezionato
  //   }
  // };

  return (
    <>
      {/* compare solo se viene selezionato un utente */}
      {/* <FormAddHours
        nameUser={nameUser}
        handleAddHours={handleAddHours}
        //  CONTROLLA BENE QUESTO, NON LO CAPISCO BENE
        isVisible={!!selectedUser}
      /> */}
      {/* messaggio dinamico che cambia se viene eliminato un user */}
      <p className="text-center">{messageUser}</p>
      <section className="grid grid-cols-2 gap-2">
        {/* se dataUser ha dei dati visualizza gli user */}
        {data &&
          data.length > 0 &&
          data.map((utente) => (
            <SingleUser
              // attenzione a dare un id univoco o removeUser rimuovera tutti gli utenti con lo stesso nome
              key={utente.id}
              {...utente}
              remove={() => removeUser(utente.id, utente.name)}
              // onSelect={() => handleSelectUser(utente.id)}
              noButton={noButton}
            />
          ))}
      </section>
    </>
  );
};

export default UserGrid;
