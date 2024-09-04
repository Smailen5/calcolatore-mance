type CardSingleUserProps = {
  children: React.ReactNode;
  selectable?: boolean;
  handleSelected?: () => void;
};

const CardSingleUser: React.FC<CardSingleUserProps> = ({
  children,
  selectable,
  handleSelected,
}) => {
  return (
    <article
      onClick={handleSelected}
      className={`relative rounded-md border p-4 text-sm shadow-md ${selectable && "cursor-pointer"}`}
    >
      {children}
    </article>
  );
};

export default CardSingleUser;
