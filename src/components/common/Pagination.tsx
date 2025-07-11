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

  const isFirst = selectedPage === 1;
  const isLast = selectedPage === pageCount;
  const isSinglePage = pageCount <= 1;

  return (
    <div className="join h-10 ">
      <button
        onClick={() => onPageSelect(selectedPage - 1)}
        disabled={isFirst || isSinglePage}
        className="join-item btn btn-sm h-10 w-10 text-white transition-all duration-200 bg-primary hover:bg-primary/80 hover:scale-105 disabled:bg-primary/40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        «
      </button>

      <button className="join-item btn btn-sm h-10 w-10 text-white bg-primary cursor-default">
        {selectedPage}
      </button>
      <button
        onClick={() => onPageSelect(selectedPage + 1)}
        disabled={isLast || isSinglePage}
        className="join-item btn btn-sm h-10 w-10 text-white transition-all duration-200 bg-primary hover:bg-primary/80 hover:scale-105 disabled:bg-primary/40 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        »
      </button>
    </div>
  );
}

export default Pagination;
