import "../styles/CharacterCard.css";

export const CharacterCard = ({ char, index }) => {
  const badgeClass = (s) => {
    const lower = s.toLowerCase();
    if (lower === "alive") return "rm-badge rm-badge--alive";
    if (lower === "dead") return "rm-badge rm-badge--dead";
    return "rm-badge rm-badge--unknown";
  };

  return (
    <div className="rm-card" style={{ animationDelay: `${index * 0.04}s` }}>
      <div className="rm-card__image-wrap">
        <img
          className="rm-card__image"
          src={char.image}
          alt={char.name}
          loading="lazy"
        />
      </div>

      <div className="rm-card__body">
        <h3 className="rm-card__name">{char.name}</h3>

        <div className="rm-card__meta">
          <span className="rm-card__species">{char.species}</span>

          <span className={badgeClass(char.status)}>
            <span className="rm-badge__dot" />
            {char.status}
          </span>
        </div>
      </div>
    </div>
  );
};
