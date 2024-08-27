import { useGlobalContext } from "@/utils/contex";
import SingleUser from "./SingleUser";

const UserGrid = () => {
  const { dataUser } = useGlobalContext();

  // se non ci sono user visualizza un messaggio
  if (!dataUser || dataUser.length === 0) {
    return <p className="text-center">Non hai ancora aggiunto dipendenti</p>;
  }

  return (
    <section className="grid grid-cols-2 gap-2">
      {/* se dataUser ha dei dati visualizza gli user */}
      {dataUser &&
        dataUser.length > 0 &&
        dataUser.map((user) => <SingleUser key={user.name} {...user} />)}
    </section>
  );
};

export default UserGrid;
