import { useCalcolaOre } from "@/utils/calcoli/calcolaOre";
import UserGrid from "./UserGrid";

type calcolatoreOreProps = {
  manciaTotale: number;
};
const CalcolatoreOre: React.FC<calcolatoreOreProps> = ({ manciaTotale }) => {
  const tipPerUser = useCalcolaOre(manciaTotale);

  return (
    <>
      <UserGrid data={tipPerUser} noButton isHours mostraMancia />
    </>
  );
};

export default CalcolatoreOre;
