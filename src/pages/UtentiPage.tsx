import Footer from "@/components/Footer";
import FormAddUser from "@/components/FormAddUser";
import Navbar from "@/components/Navbar";
import UserGrid from "@/components/UserGrid";
import { useGlobalContext } from "@/utils/context";

const UtentiPage = () => {
  const { dataUser } = useGlobalContext()
  return (
    <>
      <Navbar />
      <main className="flex min-h-[86vh] flex-col justify-center gap-8 px-4 py-8">
        <FormAddUser />
        <UserGrid data={dataUser} />
      </main>
      <Footer />
    </>
  );
};

export default UtentiPage;
