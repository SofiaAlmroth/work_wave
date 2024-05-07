import range from "../../utils";

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
  const pages: number[] = range(1, pageCount);

  if (pageCount <= 1) return null;

  return (
    <div className="text-center mt-6">
      <div className="join">
        {pages.map((page) => (
          <button
            key={page}
            className={`join-item btn ${
              page === selectedPage ? "btn-active" : ""
            }`}
            onClick={() => onPageSelect(page)}
          >
            <a className="page-link" href="#">
              {page}
            </a>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
