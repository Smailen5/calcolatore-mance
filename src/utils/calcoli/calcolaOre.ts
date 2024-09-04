import { useState } from "react";
import { useGlobalContext } from "../context";

export const useCalcolaOre = (manciaTotale: number) => {
  const { dataUserHoursSession } = useGlobalContext();
  const [data] = useState(dataUserHoursSession);
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
  return tipPerUser
};
