import { useState, useEffect, useCallback, useMemo } from "react";
import heroBg from "../assets/hero-bg.jpg";
import "../styles/Home.css";
import { Hero } from "../components/Hero.jsx";
import { CharactersGrid } from "../components/CharactersGrid.jsx";
import { FiltersSidebar } from "../components/FiltersSidebar.jsx";
import { Pagination } from "../components/Pagination.jsx";

const API_BASE = "https://rickandmortyapi.com/api/character";

export const Home = () => {
  /* ── State ── */
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* Debounced name for search */
  const [debouncedName, setDebouncedName] = useState("");

  useEffect(() => {
    const id = setTimeout(() => setDebouncedName(name), 400);
    return () => clearTimeout(id);
  }, [name]);

  /* ── Build URL ── */
  const apiUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    if (debouncedName) params.set("name", debouncedName);
    if (status) params.set("status", status);
    if (species) params.set("species", species);
    return `${API_BASE}?${params.toString()}`;
  }, [page, debouncedName, status, species]);

  /* ── Fetch ── */
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) return { results: [], info: null };
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setCharacters(data.results || []);
        setInfo(data.info || null);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message);
        setCharacters([]);
        setInfo(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [apiUrl]);

  /* ── Reset page on filter change ── */
  useEffect(() => {
    setPage(1);
  }, [debouncedName, status, species]);

  /* ── Handlers ── */
  const resetFilters = useCallback(() => {
    setName("");
    setStatus("");
    setSpecies("");
    setPage(1);
    setSidebarOpen(false);
  }, []);

  const hasActiveFilters = debouncedName || status || species;

  const scrollToGrid = () => {
    const el = document.getElementById("rm-characters");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Status badge class ── */
  const badgeClass = (s) => {
    const lower = s.toLowerCase();
    if (lower === "alive") return "rm-badge rm-badge--alive";
    if (lower === "dead") return "rm-badge rm-badge--dead";
    return "rm-badge rm-badge--unknown";
  };

  return (
    <div className="rm-home">
      {/* Hero */}
      <Hero heroBg={heroBg} scrollToGrid={scrollToGrid} />

      {/* Toolbar */}
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

      {/* Sidebar backdrop */}
      <div
        className={`rm-sidebar-backdrop ${sidebarOpen ? "rm-sidebar-backdrop--open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <FiltersSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setName={setName}
        setStatus={setStatus}
        species={species}
        setSpecies={setSpecies}
        resetFilters={resetFilters}
      />

      {/* Content */}
      <section className="rm-grid-section">
        {loading && (
          <div className="rm-state">
            <div className="rm-spinner" />
            <p className="rm-state__text">Loading characters…</p>
          </div>
        )}

        {error && !loading && (
          <div className="rm-state">
            <div className="rm-state__icon">⚠️</div>
            <h3 className="rm-state__title">Something went wrong</h3>
            <p className="rm-state__text">{error}</p>
          </div>
        )}

        {!loading && !error && characters.length === 0 && (
          <div className="rm-state">
            <div className="rm-state__icon">🔍</div>
            <h3 className="rm-state__title">No characters found</h3>
            <p className="rm-state__text">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}

        {!loading && !error && characters.length > 0 && (
          <CharactersGrid characters={characters} badgeClass={badgeClass} />
        )}
      </section>

      {/* Pagination */}
      {!loading && !error && info && (
        <Pagination page={page} info={info} setPage={setPage} />
      )}
    </div>
  );
};
