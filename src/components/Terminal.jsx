import { useState } from "react";

import History from "./History";
import Promptline from "./Promptline";
import ascii from "/src/assets/ascii-art.txt?raw";
import OutputHelp from "./outputs/OutputHelp";
import OutputNotFound from "./outputs/OutputNotFound";

const Terminal = () => {
  const [isInitialRender, setInitialRender] = useState(true);
  const [entryId, setId] = useState(0);
  const [cmdEntries, setCmdEntries] = useState([]);
  const [userCommand, setUserCommand] = useState("");

  function handleUserCmdChange(evt) {
    setUserCommand(evt.target.value);
  }
  function onCmdSubmit(evt) {
    evt.preventDefault();
    if (userCommand.length <= 0) {
      console.log("blank fire");
    } else if (userCommand === "clear") {
      setCmdEntries([]);
      setId(0);
      setUserCommand("");
      setInitialRender(false);
    } else {
      setCmdEntries([
        ...cmdEntries,
        {
          id: entryId,
          cmd: userCommand,
          commandValid: true,
          output: parseCommand(userCommand),
        },
      ]);

      setId(entryId + 1);
      setUserCommand("");
    }
  }

  return (
    <div className="terminal-container">
      <PreLoader initialRender={isInitialRender} />
      <History history={cmdEntries} />
      <Promptline
        handleCmdSubmit={onCmdSubmit}
        inputCmd={userCommand}
        handleInputCmdChange={handleUserCmdChange}
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
