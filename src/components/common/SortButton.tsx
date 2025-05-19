interface Props {
  onClick(): void;
  sortOrder: "asc" | "desc";
}
function SortButton({ onClick, sortOrder }: Props) {
  return (
    <div>
      <button
        onClick={onClick}
        className="btn btn-sm h-10 min-w-10 text-white bg-primary hover:bg-primary/85 hover:scale-105 transition-all duration-200"
      >
        {sortOrder === "asc" ? (
          <i className="fa-solid fa-sort-up"></i>
        ) : (
          <i className="fa-solid fa-sort-down"></i>
        )}
      </button>
    </div>
  );
}

export default SortButton;
