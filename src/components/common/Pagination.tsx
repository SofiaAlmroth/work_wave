interface Props {
  pageSize: number;
  totalCount: number;
  selectedPage: number;
  onPageSelect(page: number): void;
}

function Pagination({
  totalCount,
  pageSize,
  selectedPage,
  onPageSelect,
}: Props) {
  const pageCount = Math.ceil(totalCount / pageSize);
  if (pageCount <= 1) return null;

  return (
    <div className="join h-12 ">
      <button
        onClick={() => onPageSelect(selectedPage - 1)}
        className={`join-item btn btn-sm h-12 min-w-[3rem] text-white bg-primary hover:bg-primary/85 hover:scale-105 transition-all duration-200"
        ${
          selectedPage === 1
            ? "bg-primary/40 cursor-not-allowed"
            : "bg-primary hover:bg-primary/80 hover:scale-105"
        }`}
      >
        «
      </button>
      <button className="join-item btn btn-sm h-12 min-w-[3rem] text-white bg-primary hover:bg-primary ">
        {selectedPage}
      </button>
      <button
        onClick={() => onPageSelect(selectedPage + 1)}
        className="join-item btn btn-sm h-12 min-w-[3rem] text-white bg-primary  hover:bg-primary/85 hover:scale-105 transition-all duration-200"
        disabled={selectedPage === pageCount}
      >
        »
      </button>
    </div>
  );
}

export default Pagination;
