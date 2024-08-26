import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "../components/ui/button";

const ParamsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <main className="flex h-[86vh] flex-col items-center justify-center gap-8 px-4">
        <form className="flex flex-col gap-4">
          {/* nome dipendente da aggiungere */}
          <div className="flex flex-col">
            <label>Inserisci nome dipendente</label>
            <input type="text" placeholder="sonia..." />
          </div>
          {/* tipo di contratto */}
          <fieldset>
            <legend>Tipo di contratto:</legend>
            <div>
              <input type="radio" id="scales" name="scales" />
              <label htmlFor="scales">Stagionale</label>
            </div>
            <div>
              <input type="radio" id="horns" name="scales" />
              <label htmlFor="horns">Chiamata</label>
            </div>
          </fieldset>
          {/* anni di servizio */}
          <div className="flex flex-col">
            <label>Anni di servizio</label>
            <input type="number" placeholder="5..." />
          </div>

          <Button type="submit" onClick={handleSubmit} className="w-full">
            Aggiungi
          </Button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default ParamsPage;
