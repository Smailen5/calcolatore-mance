import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import UserGrid from "@/components/UserGrid";
// import UserGrid from "@/components/UserGrid";
// import UserSession from "@/components/UserSession";
import { useGlobalContext } from "@/utils/contex";

const HoursPage = () => {
const {dataUserHoursSession} = useGlobalContext()
  return (
    <>
      <Navbar />
      <Page>
        <h2>Aggiungi/modifica ore utenti</h2>
        {/* <UserSession data={dataUser} /> */}
        <UserGrid data={dataUserHoursSession} />
      </Page>
      <Footer />
    </>
  );
};

export default HoursPage;
