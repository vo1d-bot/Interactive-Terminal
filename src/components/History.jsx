import { Bio, OutputHelp, OutputNotFound } from "./outputs/Output";

function renderOutput(key) {
  switch (key) {
    case "HELP":
      return <OutputHelp />;
    case "BIO":
      return <Bio />;
    default:
      return <OutputNotFound />;
  }
}

const InputPrompt = ({ success, input }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`h-2.5 w-2.5 rounded-full ${success ? "bg-green-600" : "bg-red-600"}`}
      ></div>
      <p className="prompt-symbol">$</p>
      <p className="old-prompt">{input}</p>
    </div>
  );
};

const History = ({ history }) => {
  return (
    <>
      {history.map((log) => {
        return (
          <div key={log.id}>
            <InputPrompt success={log.success} input={log.input} />
            {renderOutput(log.output)}
          </div>
        );
      })}
    </>
  );
};

export default History;
