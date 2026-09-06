import { useState } from "react";

import History from "./History";
import Promptline from "./Promptline";
import ascii from "/src/assets/ascii-art.txt?raw";

const Terminal = () => {
  const [isInitialRender, setInitialRender] = useState(true);
  const [entryId, setEntryId] = useState(0);
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
      setEntryId(0);
      setUserCommand("");
      setInitialRender(false);
    } else {
      setCmdEntries([
        ...cmdEntries,
        {
          id: entryId,
          cmd: userCommand,
          output: parseCommand(userCommand),
        },
      ]);

      setEntryId(entryId + 1);
      setUserCommand("");
      console.log(cmdEntries);
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

function parseCommand(input) {
  const cmd = input.trim().toLowerCase();

  switch (cmd) {
    case "help":
      return { isValid: true, render: "HELP" };

    case "exit":
      return { isValid: true, render: "!FOUND" };

    case "whois":
      return { isValid: true, render: "!FOUND" };

    case "contacts":
      return { isValid: true, render: "!FOUND" };

    case "projects":
      return { isValid: true, render: "!FOUND" };

    case "gallery":
      return { isValid: true, render: "!FOUND" };

    default:
      return { isValid: false, render: "!FOUND" };
  }
}

export default Terminal;
