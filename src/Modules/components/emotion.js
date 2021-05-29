export const Emotion = ({ name, id }) => {
  const addToSelection = (e) => {
    console.log(e.target.dataset.id);
    let allEmotions = document.querySelectorAll(".single-emotion");
    console.log(allEmotions);
    allEmotions.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  return (
    <div className="single-emotion" data-id={id} onClick={addToSelection}>
      {name}
    </div>
  );
};
