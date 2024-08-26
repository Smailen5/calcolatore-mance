import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex h-[86vh] flex-col items-center justify-center gap-8 px-4">
        <h1 className="text-3xl font-bold">Compila i campi</h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;
