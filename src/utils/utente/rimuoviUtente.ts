import { UserFormValues } from "../context";

export type removeUserProps = {
  id: string;
  name: string;
  data: UserFormValues[];
  setIsSave: React.Dispatch<React.SetStateAction<boolean>>;
  setMessageUser: React.Dispatch<React.SetStateAction<string>>;
  setDataUser: React.Dispatch<React.SetStateAction<UserFormValues[]>>;
};
export const removeUser = ({
  id,
  name,
  data,
  setIsSave,
  setMessageUser,
  setDataUser,
}: removeUserProps) => {
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
