import "../styles/Hero.css";

export const Hero = ({ heroBg }) => {
  const scrollToGrid = () => {
    const el = document.getElementById("rm-characters");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="rm-hero">
      <img src={heroBg} alt="" className="rm-hero__bg" />

      <div className="rm-hero__overlay" />

      <div className="rm-hero__content">
        <h1 className="rm-hero__title">
          Welcome to the Rick and Morty Universe
        </h1>

        <p className="rm-hero__subtitle">
          Explore every character across infinite dimensions.
        </p>

        <button className="rm-hero__cta" onClick={scrollToGrid}>
          Explore Characters ↓
        </button>
      </div>
    </section>
  );
};
