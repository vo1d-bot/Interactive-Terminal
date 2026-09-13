import { useState } from "react";

const Promptline = ({ handleSubmit }) => {
  const [cmdInput, setCmdInput] = useState("");
  const handleChange = (evt) => setCmdInput(evt.target.value);
  return (
    <div className="flex gap-2 items-center">
      <div className="shape-style"></div>
      <p className="prompt-symbol text-lg">$</p>
      <form
        className="flex-1"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit(cmdInput);
          setCmdInput("");
        }}
      >
        <input
          type="text"
          className="w-full bg-transparent outline-none border-none appearance-none font-semibold"
          value={cmdInput}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Promptline;
