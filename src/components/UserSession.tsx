import { useGlobalContext } from "../utils/contex";
import FormAddHours from "./FormAddHours";
import UserGrid from "./UserGrid";

const UserSession = () => {
  const {
    hours,
    dataUserHoursSession,
    setDataUserHoursSession,
    setIsSave,
    setHours,
    selectedUser,
    setSelectedUser,
    nameUser,
    setNameUser,
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
      setHours(0); // Resetta il valore delle ore
      setNameUser(""); // Resetta il nome dell'utente selezionato
      setSelectedUser(""); // Resetta l'utente selezionato
    }
  };

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

      <UserGrid data={dataUserHoursSession} noButton={true} selectable={true} />
    </>
  );
};

export default UserSession;
