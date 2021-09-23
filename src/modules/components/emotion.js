export const Emotion = ({ name, id, state, handler }) => {
  return (
    <div
      className={`single-emotion ${state ? "active" : ""}`}
      data-id={id}
      onClick={handler}
    >
      {name}
    </div>
  );
};
