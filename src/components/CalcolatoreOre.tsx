import { useGlobalContext } from "@/utils/context";
import UserGrid from "./UserGrid";
import { useState } from "react";

type calcolatoreOreProps = {
  manciaTotale: number;
};
const CalcolatoreOre: React.FC<calcolatoreOreProps> = ({ manciaTotale }) => {
  const { dataUserHoursSession } = useGlobalContext();
  const [data] = useState(dataUserHoursSession);
  // console.log(data);

  // prende tutte le ore lavorate e le somma
  const totalHours =
    data?.reduce((total, user) => total + (user.oreLavorate || 0), 0) || 0;

  // divi le mance per le ore lavorate
  const calculateTipPercentage = (totalHours: number, oreLavorate: number) => {
    if (totalHours === 0) return 0;
    return totalHours / oreLavorate;
  };

  const tipPerUser = data?.map((user) => {
    // controlla che use.oreLavorate non sia undefined
    const oreLavorate = user.oreLavorate || 0;
    const percentage = calculateTipPercentage(oreLavorate, totalHours);

    return {
      ...user,
      mancia: percentage * manciaTotale,
    };
  });

  return (
    <>
      <div>CalcolatoreOre</div>
      <UserGrid data={tipPerUser} noButton isHours />
    </>
  );
};

export default CalcolatoreOre;
