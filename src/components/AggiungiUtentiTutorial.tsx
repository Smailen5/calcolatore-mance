import formCompleto from "../assets/screenshot/aggiungi-utente-form-completo.jpeg";
import PageTutorial from "./PageTutorial";
import utenteAggiunto from "../assets/screenshot/utente-aggiunto.jpeg";

function AggiungiUtentiTutorial() {
  return (
    <PageTutorial>
      <section>
        {/* Prima sezione come si aggiungo gli utenti e il perche di tutti i parametri */}
        <h2 id="aggiungi-utente" className="my-8 text-xl font-semibold">Aggiungi utenti</h2>
        <article className="space-y-4">
          <p>
            Per aggiungere un nuovo utente devi aggiungere tutti i parametri
            richiesti come: nome dipendente, anni di lavoro e tipo di contratto
            tra stagionale e a chiamata.*
          </p>
          <p>Qui sotto puoi vedere una immagine esplicativa.</p>
          <img
            src={formCompleto}
            alt="pagina aggiungi utenti con form completato"
          />
          <p>
            Dopo aver inserito tutti i parametri clicca sul bottone "Salva" alla
            fine del form, l'utente sara subito visibile e verra salvato
            internamente al tuo dispositivo dopo un breve tempo di attesa.
          </p>
          <h2 id="elimina-utente" className="my-8 text-xl font-semibold">Elimina utenti</h2>
          <p>
            Da questa pagina e possibile eliminare anche gli utenti non piu in
            forza, per eliminarli e sufficiente cliccare sul bottone con l'icona
            "X".
          </p>
          <img src={utenteAggiunto} alt="" />
          <p className="text-sm italic">
            *Tutti i parametri sono obbligatori anche se per il momento
            utilizzeremo solo il nome e la quantita di ore lavorate per dividere
            le mance. Prevediamo in futuro di implementare nuove funzionalita e
            permettere la divisione delle mance secondo tipo di contratto e
            anzianita di anni di lavoro.
          </p>
        </article>
      </section>
    </PageTutorial>
  );
}

export default AggiungiUtentiTutorial;
