import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import aggiungiUtenti from "../assets/screenshot/aggiungi-utenti-page.jpeg";

const TutorialPage = () => {
  return (
    <>
      <Navbar />
      <Page className="items-center">
        <h1 className="text-xl font-bold">Tutorial</h1>
        {/* lista che rimanda alle sezioni della pagina */}
        <ul className="">
          <li>
            <a href="#aggiungi-utenti">Aggiungi utenti</a>
          </li>
          <li>Aggiungi ore</li>
          <li>Calcola le mance</li>
        </ul>

        <section id="aggiungi-utenti">
          {/* Prima sezione come si aggiungo gli utenti e il perche di tutti i parametri */}
          <p>
            scrivi qui come usare l'applicazione spiegando tutte le funzionalita
          </p>
          <img src={aggiungiUtenti} alt="" />
        </section>

        {/* Sezione di come si recuperano gli utenti e il perche, come si aggiungo le ore e come si aggiornano */}

        {/* Ultima sezione come si calcola le mance e come vengono calcolate */}
      </Page>
      <Footer />
    </>
  );
};

export default TutorialPage;
