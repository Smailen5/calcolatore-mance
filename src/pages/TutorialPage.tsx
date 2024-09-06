import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";

const TutorialPage = () => {
  return (
    <>
      <Navbar />
      <Page>
        <div>tutorial page</div>
        <p>
          scrivi qui come usare l'applicazione spiegando tutte le funzionalita
        </p>
      </Page>
      <Footer />
    </>
  );
};

export default TutorialPage;
