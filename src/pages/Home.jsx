import { useState } from "react";
import heroBg from "../assets/hero-bg.jpg";
import "../styles/Home.css";
import { Hero } from "../components/Hero.jsx";
import { CharactersGrid } from "../components/CharactersGrid.jsx";
import { FiltersSidebar } from "../components/FiltersSidebar.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { Toolbar } from "../components/Toolbar.jsx";
import { StateMessage } from "../components/StateMessage.jsx";
import { useCharacters } from "../hooks/useCharacters.js";

export const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {
    characters,
    info,
    loading,
    error,
    page,
    setPage,
    name,
    setName,
    status,
    setStatus,
    species,
    setSpecies,
    debouncedName,
  } = useCharacters();

  const hasActiveFilters = debouncedName || status || species;

  const resetFilters = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setPage(1);
    setSidebarOpen(false);
  };

  return (
    <div className="rm-home">
      <Hero heroBg={heroBg} />

      <Toolbar
        characters={characters}
        info={info}
        hasActiveFilters={hasActiveFilters}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Sidebar backdrop */}
      <div
        className={`rm-sidebar-backdrop ${sidebarOpen ? "rm-sidebar-backdrop--open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <FiltersSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        name={name}
        setName={setName}
        setStatus={setStatus}
        species={species}
        setSpecies={setSpecies}
        resetFilters={resetFilters}
      />

      <section className="rm-grid-section">
        {loading && (
          <div className="rm-state">
            <div className="rm-spinner" />
            <p className="rm-state__text">Loading characters…</p>
          </div>
        )}

        {error && !loading && (
          <StateMessage
            icon={"⚠️"}
            title={"Something went wrong"}
            text={error}
          />
        )}

        {!loading && !error && characters.length === 0 && (
          <StateMessage
            icon={"🔍"}
            title={"No characters found"}
            text={"Try adjusting your filters or search terms."}
          />
        )}

        {!loading && !error && characters.length > 0 && (
          <CharactersGrid characters={characters} />
        )}
      </section>

      {!loading && !error && info && (
        <Pagination page={page} info={info} setPage={setPage} />
      )}
    </div>
  );
};
