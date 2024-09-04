import CalcolatoreOre from "@/components/CalcolatoreOre";
import Footer from "@/components/Footer";
import FormDividiMancia from "@/components/FormDividiMancia";
import Navbar from "@/components/Navbar";
import { useGlobalContext } from "@/utils/context";
import { useState } from "react";
import Page from "../components/Page";

const Home = () => {
  const { dataUser } = useGlobalContext();
  const [manciaTotale, setManciaTotale] = useState(0);

  return (
    <>
      <Navbar />
      <Page>
        {!dataUser || dataUser.length === 0 ? (
          <>
            <h1 className="text-center text-3xl font-bold">
              Non hai ancora aggiunto utenti ❗🚨
            </h1>
            <p className="text-center">
              Aggiungi nuovi utenti nella sezione parametri, se non sai come
              aggiungere un nuovo utente guarda la sezione tutoria
            </p>
          </>
        ) : (
          <h1 className="text-center text-3xl font-bold">
            Al momento{" "}
            {dataUser.length > 1
              ? `ci sono ${dataUser.length} utenti salvati`
              : "ce un solo utente salvato"}
          </h1>
        )}
        <FormDividiMancia setManciaTotale={setManciaTotale} />
        <CalcolatoreOre manciaTotale={manciaTotale} />
      </Page>
      <Footer />
    </>
  );
};

export default Home;
