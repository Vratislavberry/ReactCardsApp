import React from "react";

function FormAddSplitCard(props) {
  const [SplitCard, setSplitCard] = React.useState({ title: "", text: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setSplitCard((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  return (
    <form className="formAddSplitCard">
      <h3>Add new Split card</h3>
      <input
        onChange={handleChange}
        value={SplitCard.title}
        name="title"
        type="text"
        placeholder="title"
        required={true}
      />
      <br />
      <input
        onChange={handleChange}
        value={SplitCard.text}
        name="text"
        type="text"
        placeholder="text"
        required={true}
      />
      <br />
      <button
        onClick={() => {
          props.addSplitCard(SplitCard);
          setSplitCard({ title: "", text: "" });
        }}
        type="button"
      >
        Add
      </button>
    </form>
  );
}

export default FormAddSplitCard;
