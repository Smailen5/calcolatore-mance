import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import UserGrid from "@/components/UserGrid";

const HoursPage = () => {
  return (
    <>
      <Navbar />
      <Page>
        <h2>Aggiungi/modifica ore utenti</h2>
        <UserGrid noButton={true} />
      </Page>
      <Footer />
    </>
  );
};

export default HoursPage;
