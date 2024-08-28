import { Button } from "./ui/button";

/* 
definisce le props da passare al componente
 in quanto typescript non le conosce se si passano tramite il metodo map 
 */
interface SingleUserProps {
  name: string;
  anniServizio: string;
  contratto: string;
  remove: () => void;
  noButton?: boolean;
}

const SingleUser: React.FC<SingleUserProps> = ({
  name,
  anniServizio,
  contratto,
  remove,
  noButton
}) => {
  return (
    <>
      <article className="relative rounded-md border p-4 text-sm shadow-md">
        {/* bottone per eliminare singolo user */}
        {!noButton && (
          <Button
          size={"sm"}
          variant={"destructive"}
          className="absolute right-0 top-0"
          onClick={remove}
        >
          X
        </Button>
        )}
        
        <h2 className="capitalize">Nome: {name}</h2>
        <p>Anni di lavoro: {anniServizio}</p>
        <p>Contratto: {contratto}</p>
      </article>
    </>
  );
};

export default SingleUser;
