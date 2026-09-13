export function parseCommand(input) {
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