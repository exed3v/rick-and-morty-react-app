import "../styles/FiltersSidebar.css";

export const FiltersSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  setName,
  setStatus,
  species,
  setSpecies,
  resetFilters,
  name,
}) => {
  return (
    <aside className={`rm-sidebar ${sidebarOpen ? "rm-sidebar--open" : ""}`}>
      <div className="rm-sidebar__header">
        <h2>Filters</h2>
        <button
          className="rm-sidebar__close"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
      </div>

      <div className="rm-sidebar__body">
        <div className="rm-field">
          <label className="rm-field__label">Search by name</label>
          <input
            className="rm-field__input"
            type="text"
            placeholder="e.g. Rick Sanchez"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="rm-field">
          <label className="rm-field__label">Status</label>
          <select
            className="rm-field__select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        <div className="rm-field">
          <label className="rm-field__label">Species</label>
          <input
            className="rm-field__input"
            type="text"
            placeholder="e.g. Human, Alien"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </div>
      </div>

      <div className="rm-sidebar__footer">
        <button className="rm-reset-btn" onClick={resetFilters}>
          Reset all filters
        </button>
      </div>
    </aside>
  );
};
