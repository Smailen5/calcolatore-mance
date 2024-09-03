import { useGlobalContext } from "@/utils/context";
import UserGrid from "./UserGrid";
const CalcolatoreOre = () => {
  const { dataUserHoursSession } = useGlobalContext();
  console.log(dataUserHoursSession);
  return (
    <>
      <div>CalcolatoreOre</div>
      <UserGrid data={dataUserHoursSession} noButton isHours/>
    </>
  );
};

export default CalcolatoreOre;
