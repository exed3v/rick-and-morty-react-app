import "../styles/StateMessage.css";
export const StateMessage = ({ icon, title, text }) => {
  return (
    <div className="rm-state">
      <div className="rm-state__icon">{icon}</div>
      <h3 className="rm-state__title">{title}</h3>
      <p className="rm-state__text">{text}</p>
    </div>
  );
};
