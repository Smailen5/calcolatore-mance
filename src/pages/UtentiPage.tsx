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
      {/* <main className="flex min-h-[86vh] flex-col justify-center gap-8 px-4 py-8"> */}
      <Page>
        <FormAddUser />
        <UserGrid data={dataUser} />
      </Page>
      {/* </main> */}
      <Footer />
    </>
  );
};

export default UtentiPage;
