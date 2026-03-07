export const Pagination = ({ page, info, setPage }) => {
  return (
    <nav className="rm-pagination">
      <button
        className="rm-pagination__btn"
        disabled={!info.prev}
        onClick={() => setPage((p) => p - 1)}
      >
        ← Previous
      </button>

      <span className="rm-pagination__info">
        Page <span>{page}</span> of <span>{info.pages}</span>
      </span>

      <button
        className="rm-pagination__btn"
        disabled={!info.next}
        onClick={() => setPage((p) => p + 1)}
      >
        Next →
      </button>
    </nav>
  );
};
