export const COMMAND_LIST = [
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
    command: "show",
    description: "view arnab's tech exposure",
  },
  {
    id: 6,
    command: "projects",
    description: "View projects.",
  },
];

export function parseCommand(input) {
  const cmd = input.trim().toLowerCase();

  switch (cmd) {
    case "help":
      return { isValid: true, render: "HELP" };

    case "exit":
      return { isValid: true, render: "!FOUND" };

    case "whois":
      return { isValid: true, render: "BIO" };

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
