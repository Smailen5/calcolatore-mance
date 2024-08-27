import Footer from "@/components/Footer";
import FormAddUser from "@/components/FormAddUser";
import Navbar from "@/components/Navbar";
import UserGrid from "@/components/UserGrid";

const UtentiPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[86vh] flex-col justify-center gap-8 px-4 py-8">
        <FormAddUser />
        <UserGrid />
      </main>
      <Footer />
    </>
  );
};

export default UtentiPage;
