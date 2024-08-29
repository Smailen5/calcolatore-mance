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

  return (
    <>
      <article
        onClick={handleSelected}
        className="relative rounded-md border p-4 text-sm shadow-md"
      >
        {/* bottone per eliminare singolo user */}
        {!noButton && (
          <Button
            size={"sm"}
            variant={"destructive"}
            className="absolute right-0 top-0"
            onClick={handleRemove}
          >
            X
          </Button>
        )}

        <h2 className="capitalize">Nome: {name}</h2>
        <p>Anni di lavoro: {anniServizio}</p>
        <p>Contratto: {contratto}</p>
        {/* <p>Ore lavorate: {oreLavorate ? oreLavorate : 'aggiungi'}</p> */}
        {oreLavorate ? (
          <p>
            Ore lavorate: <span className="font-semibold">{oreLavorate}</span>
          </p>
        ) : (
          <p className="font-semibold text-destructive">Ore mancanti</p>
        )}
      </article>
    </>
  );
};

export default SingleUser;
