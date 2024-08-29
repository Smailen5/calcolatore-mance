import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import UserSession from "@/components/UserSession";
// import { useEffect } from "react";
import { useGlobalContext } from "@/utils/contex";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HoursPage = () => {
  const { setDataUserHoursSession, recuperaUtenti } = useGlobalContext();
  const [isVisible, setIsVisible] = useState(true);

  const handleRecuperaUtenti = () => {
    if (recuperaUtenti) {
      recuperaUtenti({ data: setDataUserHoursSession });
      setIsVisible(false);
    }
  };

  return (
    <>
      <Navbar />
      <Page>
        <h2>Seleziona un utente per aggiungere/modificare le ore</h2>
        {isVisible && (
          <Button onClick={handleRecuperaUtenti}>recupera utenti</Button>
        )}
        <UserSession />
      </Page>
      <Footer />
    </>
  );
};

export default HoursPage;
