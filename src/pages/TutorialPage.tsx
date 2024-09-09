import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import AggiungiUtentiTutorial from "@/components/AggiungiUtentiTutorial";

const TutorialPage = () => {
  return (
    <>
      <Navbar />
      <Page className="items-center">
        <h1 className="text-xl font-bold">Tutorial</h1>
        {/* lista che rimanda alle sezioni della pagina */}
        <ul className="w-full list-inside list-disc">
          <li>
            <a href="#aggiungi-utente">Aggiungi utente</a>
          </li>
          <li>
            <a href="#elimina-utente">Elimina utente</a>
          </li>
          <li>Aggiungi ore</li>
          <li>Calcola le mance</li>
        </ul>

        <AggiungiUtentiTutorial />

        {/* Sezione di come si recuperano gli utenti e il perche, come si aggiungo le ore e come si aggiornano */}

        {/* Ultima sezione come si calcola le mance e come vengono calcolate */}
      </Page>
      <Footer />
    </>
  );
};

export default TutorialPage;
