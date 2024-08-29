import FormAddHours from "./FormAddHours";
import { useState } from "react";
import { useGlobalContext } from "../utils/contex";
// import SingleUser from "./SingleUser";
import UserGrid from "./UserGrid";

const UserSession = () => {
  const [nameUser, setNameUser] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string>("");

  const { hours, dataUser, dataUserHoursSession, setDataUserHoursSession, setIsSave, setHours } =
    useGlobalContext();

  // gestisce l'inserimento delle ore
  const handleAddHours = () => {
    // Verifica che ci sia un utente selezionato e che l'input ore non sia vuoto
    if (selectedUser && hours && dataUser) {
      const updatedUserList = dataUser.map((user) => {
        if (user.id === selectedUser) {
          return {
            ...user,
            oreLavorate: hours, // Aggiorna oreLavorate
          };
        }
        return user; // Ritorna gli altri utenti senza modifiche
      });
      // setDataUser(updatedUserList); // Aggiorna lo stato con la nuova lista utenti
      setDataUserHoursSession(updatedUserList); // Aggiorna sessionStorage con gli stessi dati di localStorage
      setIsSave(true); // Segnala che ci sono modifiche da salvare
      setHours(0); // Resetta il valore delle ore
      setNameUser(""); // Resetta il nome dell'utente selezionato
      setSelectedUser(""); // Resetta l'utente selezionato
    }
  };

  // gestisce la selezione del user
//   const handleSelectUser = (id: string) => {
//     if (dataUser) {
//       const selectedUser = dataUser.find((user) => user.id === id);
//       if (selectedUser) {
//         setSelectedUser(id);
//         setNameUser(selectedUser.name);
//       }
//       return nameUser;
//     }
//   };

  return (
    <>
      <div>
        {/* compare solo se viene selezionato un utente */}
        <FormAddHours
          nameUser={nameUser}
          handleAddHours={handleAddHours}
          //  CONTROLLA BENE QUESTO, NON LO CAPISCO BENE
          isVisible={!!selectedUser}
        />
      </div>

      {/* messaggio dinamico che cambia se viene eliminato un user */}
      {/* <p className="text-center">{messageUser}</p> */}
      <section className="grid grid-cols-2 gap-2">
      <UserGrid data={dataUserHoursSession} noButton={true} />
      </section>
    </>
  );
};

export default UserSession;
