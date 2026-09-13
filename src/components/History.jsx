import OutputHelp from "../components/outputs/OutputHelp";
import OutputNotFound from "../components/outputs/OutputNotFound";

const History = ({ history }) => {
  return (
    <>
      {history.map((log) => {
        return (
          <div key={log.id}>
            <div className="flex gap-2 items-center">
              <div
                className={`h-2.5 w-2.5 rounded-full ${log.success ? "bg-green-600" : "bg-red-600"}`}
              ></div>
              <p className="prompt-symbol">$</p>
              <p className="old-prompt font-semibold">{log.input}</p>
            </div>
            {renderOutput(log.output)}
          </div>
        );
      })}
    </>
  );
};

function renderOutput(key) {
  switch (key) {
    case "HELP":
      return <OutputHelp />;

    default:
      return <OutputNotFound />;
  }
}

export default History;
