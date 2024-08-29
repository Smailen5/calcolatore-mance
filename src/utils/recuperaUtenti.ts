import { Dispatch, SetStateAction } from "react";
import { UserFormValues } from "./contex";

export type recuperaUtentiProps = {
  data?: Dispatch<SetStateAction<UserFormValues[]>>; // Accetta un array di UserFormValues
  setIsSave: Dispatch<SetStateAction<boolean>>;
};

export const recuperaUtenti = ({ data, setIsSave }: recuperaUtentiProps) => {
  console.log("recuperaUtenti chiamata");

  const storeData = localStorage.getItem("user");
  if (storeData) {
    const users = JSON.parse(storeData) as UserFormValues[];
    if (data) {
      data((prevData) => {
        // Crea un set degli ID degli utenti recuperati
        const updatedUserIds = new Set(users.map((user) => user.id));

        // Filtra e conserva solo gli utenti esistenti che sono anche in localStorage
        const usersToKeep = prevData.filter((user) =>
          // Mantieni solo gli utenti che hanno un ID che esiste anche nel set di updateUserIds
          updatedUserIds.has(user.id),
        );

        // Aggiungi solo i nuovi utenti che non sono presenti in prevData
        const newUsers = users.filter(
          (user) =>
            // Filtra gli utenti recuperati da localStorage per aggiungere solo quelli nuovi
            !prevData.some((existingUser) => existingUser.id === user.id),
        );
        setIsSave(true);
        return [...usersToKeep, ...newUsers];
      });
      console.log("dati utente aggiornati", users);
    } else {
      console.log("nessun dato trovato");
    }
  }
};
