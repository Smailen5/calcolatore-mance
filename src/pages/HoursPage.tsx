import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import UserSession from "@/components/UserSession";
import { useGlobalContext } from "@/utils/contex";
import { useState } from "react";

const HoursPage = () => {
  const { setDataUserHoursSession, recuperaUtenti, setIsSave } = useGlobalContext();
  const [isVisible, setIsVisible] = useState(true);

  const handleRecuperaUtenti = () => {
    if (recuperaUtenti) {
      recuperaUtenti({ data: setDataUserHoursSession, setIsSave });
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
