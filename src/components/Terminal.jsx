import { useState, useRef, useEffect } from "react";

import History from "./History";
import Promptline from "./Promptline";

import ascii from "/src/assets/ascii-art.txt?raw";
import { parseCommand } from "../utils/parser";

const PreLoader = () => {
  return (
    <div className="preloader-container pb-4">
      <pre>{ascii}</pre>
      <h1>Welcome to the interactive terminal.</h1>
      <p>For a list of available commands, type 'help'.</p>
    </div>
  );
};

const Terminal = () => {
  const cmdCursor = useRef(null);
  const [cmdLog, setCmdLog] = useState([]);
  const [renderPreLoader, setRenderPreloader] = useState(true);

  useEffect(() => {
    cmdCursor.current.scrollIntoView({ behavior: "smooth" });
    cmdCursor.current.focus();
  }, [cmdLog]);

  const handleSubmit = (cmdInput) => {
    const cmd = cmdInput.trim().toLowerCase();

    if (cmd.length === 0) return;
    else if (cmd === "clear") {
      if (renderPreLoader) {
        setRenderPreloader(() => !renderPreLoader);
      }
      setCmdLog([]);
    } else {
      const { isValid, render } = parseCommand(cmd);
      setCmdLog((prevLog) => [
        ...prevLog,
        {
          id: crypto.randomUUID(),
          input: cmd,
          success: isValid,
          output: render,
        },
      ]);
    }
  };

  return (
    <section
      className="terminal-container"
      onClick={() => cmdCursor.current.focus()}
    >
      {renderPreLoader && <PreLoader />}
      <History history={cmdLog} />
      <Promptline handleSubmit={handleSubmit} cursorRef={cmdCursor} />
    </section>
  );
};

export default Terminal;
