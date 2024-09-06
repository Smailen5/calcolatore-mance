import Footer from "@/components/Footer";
import FormAddUser from "@/components/FormAddUser";
import Navbar from "@/components/Navbar";
import UserGrid from "@/components/UserGrid";
import { useGlobalContext } from "@/utils/context";
import Page from "../components/Page";

const UtentiPage = () => {
  const { dataUser } = useGlobalContext();
  return (
    <>
      <Navbar />
      <Page className="pb-28">
        <FormAddUser />
        <UserGrid data={dataUser} />
      </Page>
      <Footer />
    </>
  );
};

export default UtentiPage;
