import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import UserSession from "@/components/UserSession";
import { useGlobalContext } from "@/utils/context";
import { useState } from "react";

const HoursPage = () => {
  const { setDataUserHoursSession, recuperaUtenti, setIsSave } =
    useGlobalContext();
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
        <div className="flex flex-col gap-4 rounded-md border p-4 text-center shadow-md">
          <h2>Clicca un utente per aggiungere/modificare le ore</h2>
          <p>
            Recupera gli utenti solo quando hai aggiunto o rimosso un utente dal
            elenco
          </p>
          {isVisible && (
            <Button onClick={handleRecuperaUtenti}>recupera utenti</Button>
          )}
        </div>
        <UserSession />
      </Page>
      <Footer />
    </>
  );
};

export default HoursPage;
