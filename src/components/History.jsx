const History = ({ history }) => {
  return (
    <>
      {history.map((ce) => {
        return (
          <div key={ce.id}>
            <OldPrompt success={ce.commandValid} prompt={ce.cmd} />{ce.output}
          </div>
        );
      })}
    </>
  );
};

const OldPrompt = ({ success, prompt }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`h-2.5 w-2.5 rounded-full ${success ? "bg-green-600" : "bg-red-600"}`}
      ></div>
      <p className="prompt-symbol">$</p>
      <p className="old-prompt font-semibold">{prompt}</p>
    </div>
  );
};

export default History;
