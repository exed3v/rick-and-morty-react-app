import { CharacterCard } from "./CharacterCard.jsx";
export const CharactersGrid = ({ characters, badgeClass }) => {
  return (
    <div className="rm-grid">
      {characters.map((char, i) => (
        <CharacterCard
          key={char.id}
          char={char}
          index={i}
          badgeClass={badgeClass}
        />
      ))}
    </div>
  );
};
