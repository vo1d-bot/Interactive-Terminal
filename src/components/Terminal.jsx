import { useState } from "react";

import History from "./History";
import Promptline from "./Promptline";

import ascii from "/src/assets/ascii-art.txt?raw";
import { parseCommand } from "../utils/parser";

const Terminal = () => {
  const [cmdLog, setCmdLog] = useState([]);

  const handleSubmit = (cmdInput) => {
    const cmd = cmdInput.trim().toLowerCase();

    if (cmd.length === 0) return;
    else if (cmd === "clear") {
      setCmdLog([]);
    } else {
      const { isValid, render } = parseCommand(cmd);
      setCmdLog((prevLog) => [
        ...prevLog,
        { id: crypto.randomUUID(), input: cmd, success: isValid, output: render },
      ]);
    }
  };

  return (
    <div className="terminal-container">
      <PreLoader />
      <History history={cmdLog} />
      <Promptline handleSubmit={handleSubmit} />
    </div>
  );
};

const PreLoader = () => {
  return (
    <div className="pb-4">
      <pre>{ascii}</pre>
      <h1>Welcome.</h1>
      <p>For a list of available commands, type 'help'.</p>
    </div>
  );
};

export default Terminal;
