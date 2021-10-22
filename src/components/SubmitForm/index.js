import { useState } from "react";

const SubmitForm = ({ onFormSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") return;
    onFormSubmit(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default SubmitForm;
