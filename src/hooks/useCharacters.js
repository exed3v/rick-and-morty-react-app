import { useState, useEffect } from "react";
import { getCharacters } from "../services/rickAndMortyApi.js";

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debouncedName, setDebouncedName] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedName(name);
    }, 400);

    return () => clearTimeout(id);
  }, [name]);

  useEffect(() => {
    setPage(1);
  }, [debouncedName, status, species]);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getCharacters({
          page,
          name: debouncedName,
          status,
          species,
        });

        if (cancelled) return;

        setCharacters(data.results || []);
        setInfo(data.info || null);
      } catch (err) {
        if (cancelled) return;

        setError(err.message);
        setCharacters([]);
        setInfo(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [page, debouncedName, status, species]);

  return {
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
  };
};
