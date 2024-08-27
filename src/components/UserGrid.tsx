import { useGlobalContext } from "@/utils/contex";

const UserGrid = () => {
  const { dataUser } = useGlobalContext();
  console.log(dataUser)
  return <div>UserGrid</div>;
};

export default UserGrid;
