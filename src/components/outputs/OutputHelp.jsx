const COMMAND_LIST = [
  {
    id: 1,
    command: "help",
    description: "You know what this is.",
  },
  {
    id: 2,
    command: "clear",
    description: "Clears terminal screen.",
  },
  {
    id: 3,
    command: "exit",
    description: "Closes terminal",
  },
  {
    id: 4,
    command: "whois",
    description: "Who is Arnab?",
  },
  {
    id: 5,
    command: "projects",
    description: "View projects.",
  },
];

const OutputHelp = () => {
  return (
    <div className="pb-4">
      <dl>
        {COMMAND_LIST.map((c) => {
          return (
            <div key={c.id} className="flex gap-2">
              <dt className="shrink-0 w-18 font-semibold">{c.command}</dt>
              <dd className="flex-1">{c.description}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export default OutputHelp;
