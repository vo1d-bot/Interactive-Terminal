import OutputHelp from "../components/outputs/OutputHelp";
import OutputNotFound from "../components/outputs/OutputNotFound";

const History = ({ history }) => {
  return (
    <>
      {history.map((ce) => {
        return (
          <div key={ce.id}>
            <OldPrompt success={ce.output.isValid} prompt={ce.cmd} />
            {renderOutput(ce.output.render)}
          </div>
        );
      })}
    </>
  );
};

function renderOutput(key) {
  console.log(key);
  switch (key) {
    case "HELP":
      return <OutputHelp />;

    default:
      return <OutputNotFound />;
  }
}

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
