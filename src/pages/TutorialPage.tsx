import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";

const TutorialPage = () => {
  return (
    <>
      <Navbar />
      <Page className="items-center">
        <h1 className="font-bold text-xl">Tutorial</h1>
        <p>
          scrivi qui come usare l'applicazione spiegando tutte le funzionalita
        </p>
      </Page>
      <Footer />
    </>
  );
};

export default TutorialPage;
