import Footer from "@/components/Footer";
import FormAddUser from "@/components/FormAddUser";
import Navbar from "@/components/Navbar";

const ParamsPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex h-[86vh] flex-col items-center justify-center gap-8 px-4">
        <FormAddUser />
      </main>
      <Footer />
    </>
  );
};

export default ParamsPage;
