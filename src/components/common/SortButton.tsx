interface Props {
  onClick(): void;
  sortOrder: "asc" | "desc";
}
function SortButton({ onClick, sortOrder }: Props) {
  return (
    <div>
      <button onClick={onClick} className="btn btn-square btn-sm">
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
