const API_BASE = "https://rickandmortyapi.com/api/character";

export const getCharacters = async ({ page, name, status, species }) => {
  const params = new URLSearchParams();

  params.set("page", page);

  if (name) params.set("name", name);
  if (status) params.set("status", status);
  if (species) params.set("species", species);

  const response = await fetch(`${API_BASE}?${params}`);

  if (!response.ok) {
    if (response.status === 404) {
      return { results: [], info: null };
    }

    throw new Error("API request failed");
  }

  return response.json();
};
