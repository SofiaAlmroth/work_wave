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
    <div className="flex justify-end m-3">
      <div className="join">
        <button
          onClick={() => onPageSelect(selectedPage - 1)}
          className="join-item btn btn-sm"
          disabled={selectedPage === 1}
        >
          «
        </button>
        <button className="join-item btn btn-sm">{selectedPage}</button>
        <button
          onClick={() => onPageSelect(selectedPage + 1)}
          className="join-item btn btn-sm"
          disabled={selectedPage === pageCount}
        >
          »
        </button>
      </div>
    </div>
  );
}

export default Pagination;
