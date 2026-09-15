import { COMMAND_LIST } from "../../utils/parser";

export const OutputHelp = () => {
  return (
    <div className="pb-4">
      <dl>
        {COMMAND_LIST.map((c) => {
          return (
            <div key={c.id} className="description-list flex gap-4">
              <dt className="shrink-0 w-24">{c.command}</dt>
              <dd className="flex-1">{c.description}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
};

export const OutputNotFound = () => {
  return (
    <div className="pb-4">
      <p>
        <span className="text-red-600">Command not found.</span> For a list of
        commands, type 'help'.
      </p>
    </div>
  );
};

export const Bio = () => {
  // Computer Science student focused on frontend development. Works with React, JavaScript, and Tailwind CSS to build clean, responsive interfaces. Along the way has built robots, managed projects, taught technical workshops, and collaborated with small teams.
  // Frontend: React, JavaScript, Tailwind CSS, HTML5, CSS3
  // Tools & Deployment: Vite, GitHub, Vercel
  // Hardware/ Embedded: C/C++, Arduino IDE, PlatformIO

  return (
    <div className="bio-container">
      <p className="bio">
        Computer Science student focused on frontend development. Works with
        React, JavaScript, and Tailwind CSS to build clean, responsive
        interfaces. Along the way has built robots, managed projects, taught
        technical workshops, and collaborated with small teams.
      </p>

      <ol className="skills my-2">
        <span>Tech Exposure</span>
        <li>
          <p>
            <span>Frontend:</span> React, JavaScript, Tailwind CSS, HTML5, CSS3
          </p>
        </li>
        <li>
          <p>
            <span>Tools & Deployment:</span> Vite, GitHub, Vercel
          </p>
        </li>
        <li>
          <p>
            <span>Hardware/ Embedded:</span> C/C++, Arduino IDE, PlatformIO
          </p>
        </li>
      </ol>
    </div>
  );
};
