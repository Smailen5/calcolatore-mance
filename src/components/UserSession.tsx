import { useGlobalContext } from "../utils/contex";
import FormAddHours from "./FormAddHours";
import UserGrid from "./UserGrid";

const UserSession = () => {
  const {
    hours,
    dataUserHoursSession,
    setDataUserHoursSession,
    setIsSave,
    selectedUser,
    nameUser,
  } = useGlobalContext();

  // gestisce l'inserimento delle ore
  const handleAddHours = () => {
    // Verifica che ci sia un utente selezionato e che l'input ore non sia vuoto
    if (selectedUser && hours && dataUserHoursSession) {
      const updatedUserList = dataUserHoursSession.map((user) => {
        if (user.id === selectedUser) {
          return {
            ...user,
            oreLavorate: hours, // Aggiorna oreLavorate
          };
        }
        return user; // Ritorna gli altri utenti senza modifiche
      });
      setDataUserHoursSession(updatedUserList); // Aggiorna sessionStorage con gli stessi dati di localStorage
      setIsSave(true); // Segnala che ci sono modifiche da salvare
    }
  };

  return (
    <>
      <FormAddHours
        nameUser={nameUser}
        handleAddHours={handleAddHours}
        //  CONTROLLA BENE QUESTO, NON LO CAPISCO BENE
        isVisible={!!selectedUser}
      />
      <UserGrid data={dataUserHoursSession} noButton={true} selectable={true} />
    </>
  );
};

export default UserSession;
