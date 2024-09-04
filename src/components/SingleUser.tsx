import { Button } from "./ui/button";

/* 
definisce le props da passare al componente
 in quanto typescript non le conosce se si passano tramite il metodo map 
 */
interface SingleUserProps {
  name: string;
  anniServizio: string;
  contratto: string;
  remove?: () => void;
  selectable?: boolean;
  onSelect?: () => void;
  noButton?: boolean;
  oreLavorate?: number;
  isHours?: boolean;
  mancia?: number;
}

const SingleUser: React.FC<SingleUserProps> = ({
  name,
  anniServizio,
  contratto,
  remove,
  selectable,
  onSelect,
  noButton,
  oreLavorate,
  isHours,
  mancia,
}) => {
  // impedisce che al click si attivi anche l'evento sottostante dell'elemento in cui si trova
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (remove) {
      remove();
    }
  };

  const handleSelected = () => {
    if (selectable) {
      if (onSelect) {
        onSelect();
      }
    }
  };

  // console.log(`isHours: ${isHours} selectable: ${selectable}`);

  return (
    <>
      <article
        onClick={handleSelected}
        className={`relative rounded-md border p-4 text-sm shadow-md ${selectable && "cursor-pointer"}`}
      >
        {/* bottone per eliminare singolo user */}
        {!noButton && (
          <Button
            size={"sm"}
            variant={"destructive"}
            className="absolute right-1 top-1"
            onClick={handleRemove}
          >
            X
          </Button>
        )}

        <h2 className="capitalize">Nome: {name}</h2>
        {/* se isHours non e definito mostra tutte le informazioni */}
        {!isHours && (
          <>
            <p>Anni di lavoro: {anniServizio}</p>
            <p>Contratto: {contratto}</p>
          </>
        )}

        {/* CHIEDI CONSIGLIO IN QUALCHE GRUPPO */}
        {/* Bel casino, in sostanza ritorna sempre il componente ma se selectable e true permette di selezionarlo */}
        {(isHours || selectable) &&
          (oreLavorate ? (
            <p>
              Ore lavorate: <span className="font-semibold">{oreLavorate}</span>
            </p>
          ) : (
            <p className="font-semibold text-destructive">Ore mancanti</p>
          ))}

        {/* se mancia esiste mostrala */}
        {mancia && (
          <p>
            Mancia: <span className="font-semibold">{mancia}</span>
          </p>
        )}
      </article>
    </>
  );
};

export default SingleUser;
