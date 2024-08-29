import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import UserSession from "@/components/UserSession";

const HoursPage = () => {
  // const {dataUserHoursSession} = useGlobalContext()
  return (
    <>
      <Navbar />
      <Page>
        <h2>Seleziona un utente per aggiungere/modificare le ore</h2>
        <UserSession />
        {/* <UserGrid data={dataUserHoursSession} /> */}
      </Page>
      <Footer />
    </>
  );
};

export default HoursPage;
