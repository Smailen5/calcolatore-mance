import Footer from "@/components/Footer";
import FormAddUser from "@/components/FormAddUser";
import Navbar from "@/components/Navbar";
import UserGrid from "@/components/UserGrid";

const ParamsPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex h-[86vh] flex-col justify-center gap-8 px-4">
        <FormAddUser />
        <UserGrid />
      </main>
      <Footer />
    </>
  );
};

export default ParamsPage;
