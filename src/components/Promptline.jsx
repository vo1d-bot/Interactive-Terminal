const Promptline = ({ handleCmdSubmit, inputCmd, handleInputCmdChange }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="shape-style"></div>
      <p className="prompt-symbol text-lg">$</p>
      <form className="flex-1" onSubmit={handleCmdSubmit}>
        <input
          type="text"
          name="user_cmd"
          id="user_cmd"
          className="w-full bg-transparent outline-none border-none appearance-none font-semibold"
          value={inputCmd}
          onChange={handleInputCmdChange}
        />
      </form>
    </div>
  );
};

export default Promptline;
