import { Dispatch, SetStateAction } from "react";
import { UserFormValues } from "./contex";

export type recuperaUtentiProps = {
  data?: Dispatch<SetStateAction<UserFormValues[]>>; // Accetta un array di UserFormValues
};

export const recuperaUtenti = ({ data }: recuperaUtentiProps) => {
  console.log("recuperaUtenti chiamata");

  const storeData = localStorage.getItem("user");
  if (storeData) {
    const users = JSON.parse(storeData) as UserFormValues[];
    if (data) {
      data((prevData) => {
        // prende id utenti gia esistenti
        const existingUserIds = new Set(prevData.map((user) => user.id));
        // filtra solo gli utenti che non sono gia presenti
        const newUsers = users.filter((user) => !existingUserIds.has(user.id));
        return [...prevData, ...newUsers];
      });
      console.log("dati utente aggiornati", users);
    } else {
      console.log("nessun dato trovato");
    }
  }
};
