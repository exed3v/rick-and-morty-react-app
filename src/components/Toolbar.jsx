import "../styles/Toolbar.css";

export const Toolbar = ({
  characters,
  info,
  hasActiveFilters,
  setSidebarOpen,
}) => {
  return (
    <div className="rm-toolbar" id="rm-characters">
      <div className="rm-toolbar__info">
        {info && (
          <>
            Showing <span>{characters.length}</span> of{" "}
            <span>{info.count}</span> characters
          </>
        )}
      </div>
      <button
        className={`rm-filter-btn ${hasActiveFilters ? "rm-filter-btn--active" : ""}`}
        onClick={() => setSidebarOpen(true)}
      >
        {hasActiveFilters && <span className="rm-filter-btn__dot" />}
        Filters
      </button>
    </div>
  );
};
