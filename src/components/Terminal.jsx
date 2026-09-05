import { useState } from "react";

import History from "./History";
import Promptline from "./Promptline";
import ascii from "/src/assets/ascii-art.txt?raw";
import OutputHelp from "./outputs/OutputHelp";
import OutputNotFound from "./outputs/OutputNotFound";

const Terminal = () => {
  const [isInitial, setIsInitial] = useState(true);
  const [entryId, setId] = useState(0);
  const [cmdEntries, setCmdEntries] = useState([]);

  const [command, setCommand] = useState("");
  function onChange(evt) {
    setCommand(evt.target.value);
  }
  function onSubmit(evt) {
    evt.preventDefault();
    if (command.length <= 0) {
      console.log("blank fire");
    } else if (command === "clear") {
      setCmdEntries([]);
      setId(0);
      setCommand("");
      setIsInitial(false);
    } else {
      setCmdEntries([
        ...cmdEntries,
        {
          id: entryId,
          cmd: command,
          commandValid: true,
          output: parseCommand(command),
        },
      ]);

      setId(entryId + 1);
      setCommand("");
    }
  }

  return (
    <div className="terminal-container">
      <PreLoader initialRender={isInitial} />
      <History history={cmdEntries} />
      <Promptline
        handleSubmit={onSubmit}
        value={command}
        handleChange={onChange}
      />
    </div>
  );
};

const PreLoader = ({ initialRender }) => {
  if (!initialRender) return;
  return (
    <div className="pb-4">
      <pre>{ascii}</pre>
      <h1>Welcome.</h1>
      <p>For a list of available commands, type 'help'.</p>
    </div>
  );
};

function parseCommand(cmd) {
  switch (cmd) {
    case "help":
      return <OutputHelp />;

    case "clear":
      return;

    default:
      return <OutputNotFound />;
  }
}

export default Terminal;
