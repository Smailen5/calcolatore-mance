import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import UserSession from "@/components/UserSession";
import { useEffect } from "react";
import { useGlobalContext } from "@/utils/contex";

const HoursPage = () => {
  const { setDataUserHoursSession } = useGlobalContext();

  // aggiorna i dati in sessionStorage quando il sessionStorage cambia
  useEffect(() => {
    const storeData = localStorage.getItem("user");
    if (storeData) {
      const user = JSON.parse(storeData);
      setDataUserHoursSession(user);
    }
  }, [setDataUserHoursSession]);

  return (
    <>
      <Navbar />
      <Page>
        <h2>Seleziona un utente per aggiungere/modificare le ore</h2>
        <UserSession />
      </Page>
      <Footer />
    </>
  );
};

export default HoursPage;
