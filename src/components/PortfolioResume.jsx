// src/components/TerminalResume.jsx

import React, { useState, useRef, useEffect } from "react";

const profileImg =
  "https://res.cloudinary.com/drr7pngkv/image/upload/v1752754199/WhatsApp_Image_2025-03-03_at_17.24.07_8b6df072_op4aab.jpg";

// Terminal content data
const sections = [
  {
    title: "Career Objective",
    command: "cat careerObjective.txt",
    output: `Enthusiastic and detail-oriented MERN Stack Developer with strong foundations in MongoDB, Express.js, React.js, and Node.js. Passionate about building scalable, user-friendly web applications and eager to apply academic knowledge and personal projects to real-world challenges.`,
  },
  {
    title: "Contact",
    command: "cat contact.json",
    output: {
      github: "https://github.com/parivaibhav",
      phone: "+91 8799064890",
      email: "parivaibhav055@gmail.com",
      linkedIn: "https://www.linkedin.com/in/vaibhav-pari-399a88230",
      youtube: "https://youtube.com/@parivaibhav055",
      leetcode: "https://leetcode.com/u/vaibhavpari055/",
    },
  },
  {
    title: "Projects",
    command: "cat projects.md",
    output: [
      {
        name: "SHORTIFY - URL Shortener App",
        details: [
          "Scalable URL shortening service with guest limits & Google-authenticated unlimited access.",
          "Secured API with JWT, optimized MongoDB for instant redirects.",
          "Deployed via Vercel & Render.",
        ],
      },
      {
        name: "DEVSANDBOX - Live Code Editor",
        details: [
          "Browser-based HTML/CSS/JS editor with real-time preview & console output.",
          "MongoDB-based file management (save, load, delete).",
          "Responsive File Explorer, theme toggle, external library integration.",
        ],
      },
      {
        name: "WANDERLUST - Airbnb Clone",
        details: [
          "Rental platform with Passport.js authentication.",
          "Cloudinary for secure image storage.",
          "Role-based route protection for property management.",
        ],
      },
    ],
  },
  {
    title: "Skills",
    command: "cat skills.json",
    output: {
      frontend: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Redux/Zustand",
        "Tailwind CSS",
        "Bootstrap",
        "UI & UX",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "REST API",
        "Authentication (JWT, Passport.js)",
      ],
      database: ["MongoDB", "Mongoose", "MySQL"],
      tools: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Deployment (Vercel, Render, Netlify)",
        "Figma",
      ],
      others: ["Cloudinary", "API Integration"],
    },
  },
  {
    title: "Education",
    command: "cat education.json",
    output: [
      {
        institution: "Bhakt Kavi Narsinh Mehta University",
        degree: "BCA",
        gpa: "7.6/10",
        graduation: "Expected Apr 2026",
      },
      {
        institution: "Dudabhai Dhanjibhai Ladani High School",
        degree: "12th Commerce",
        percentile: "74.50%",
        year: "2023",
      },
    ],
  },
  {
    title: "Certificates",
    command: "cat certificates.txt",
    output: [
      "MERN Stack Development – Apna College",
      "Data Structures & Algorithms with Java – Apna College",
      "Web Development – SoloLearn",
    ],
  },
  {
    title: "Additional Info",
    command: "cat additionalInfo.json",
    output: {
      languages: ["English", "Hindi"],
      availability: "Immediate",
      interests: ["Open-source", "UI/UX", "Problem-solving"],
    },
  },
];

// Render output based on data type
function renderOutput(output) {
  if (typeof output === "string") return <span>{output}</span>;

  if (Array.isArray(output)) {
    if (output.length && typeof output[0] === "object") {
      return output.map((item, index) => {
        if (item.name) {
          return (
            <div key={index}>
              <strong>{item.name}</strong>
              <ul className="list-disc ml-4">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          );
        }
        if (item.institution) {
          return (
            <div key={index}>
              {item.institution} | {item.degree || ""}
              {item.gpa && ` | GPA: ${item.gpa}`}
              {item.percentile && ` | ${item.percentile}`}
              {item.graduation && ` | Graduation: ${item.graduation}`}
              {item.year && ` | Year: ${item.year}`}
            </div>
          );
        }
        return <pre key={index}>{JSON.stringify(item, null, 2)}</pre>;
      });
    }
    return (
      <ul className="list-disc ml-4">
        {output.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    );
  }

  if (typeof output === "object") {
    return (
      <div>
        {Object.entries(output).map(([k, v]) => (
          <div key={k}>
            <strong>{k}:</strong>{" "}
            {typeof v === "string" && v.startsWith("http") ? (
              <a
                href={v}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-400 hover:text-green-300"
              >
                {v}
              </a>
            ) : Array.isArray(v) ? (
              v.join(", ")
            ) : (
              v
            )}
          </div>
        ))}
      </div>
    );
  }

  return <pre>{JSON.stringify(output, null, 2)}</pre>;
}

export default function TerminalResume() {
  const welcomeMessage = [
    "Welcome to Vaibhav Pari's portfolio terminal.",
    "Type `help` to see available commands.",
  ];

  const LOADING_FRAMES = [".", "..", "..."];
  const LOADING_DELAY = 200;
  const COMMAND_DELAY = 800;
  const TYPING_DELAY = 20;

  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const commandsList = sections.map((s) => s.command).concat(["help", "clear"]);

  function simulateTyping(text, callback) {
    let index = 0;
    const interval = setInterval(() => {
      setHistory((prev) => {
        const lastEntry = prev[prev.length - 1];
        if (lastEntry?.type === "typing") {
          return [
            ...prev.slice(0, -1),
            { type: "typing", text: text.slice(0, index) },
          ];
        }
        return [...prev, { type: "typing", text: text.slice(0, index) }];
      });
      index++;
      if (index > text.length) {
        clearInterval(interval);
        setHistory((prev) =>
          prev.map((entry) =>
            entry.type === "typing" ? { type: "output", text } : entry
          )
        );
        callback && callback();
      }
    }, TYPING_DELAY);
  }

  function simulateLoading(callback) {
    setLoading(true);
    let frame = 0;
    const id = setInterval(() => {
      setHistory((prev) => [
        ...prev.filter((h) => h.type !== "loading"),
        { type: "loading", text: `Processing${LOADING_FRAMES[frame]}` },
      ]);
      frame = (frame + 1) % LOADING_FRAMES.length;
    }, LOADING_DELAY);

    setTimeout(() => {
      clearInterval(id);
      setLoading(false);
      setHistory((prev) => prev.filter((h) => h.type !== "loading"));
      callback();
    }, COMMAND_DELAY);
  }

  const handleCommand = () => {
    const cmd = input.trim();
    if (!cmd) return;

    setHistory((prev) => [...prev, { type: "command", text: `$ ${cmd}` }]);
    setInput("");

    if (cmd === "help") {
      simulateLoading(() => {
        setHistory((prev) => [
          ...prev,
          {
            type: "output",
            text: "Available commands:\n" + commandsList.join("\n"),
          },
        ]);
      });
    } else if (cmd === "clear") {
      setHistory([]);
    } else {
      const section = sections.find((s) => s.command === cmd);
      if (section) {
        simulateLoading(() => {
          if (cmd.startsWith("cat") && typeof section.output === "string") {
            simulateTyping(section.output);
          } else {
            setHistory((prev) => [
              ...prev,
              { type: "output", text: renderOutput(section.output) },
            ]);
          }
        });
      } else {
        simulateLoading(() => {
          setHistory((prev) => [
            ...prev,
            { type: "error", text: `Command not found: ${cmd}` },
          ]);
        });
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono min-h-[150vh] p-4 sm:p-6">
      <div className="max-w-5xl mx-auto border border-green-500 rounded-lg shadow-lg">
        {/* Terminal Header */}
        <div className="bg-gray-900 px-4 py-2 flex items-center border-b border-green-500 rounded-lg">
          <div className="flex space-x-2 mr-4">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <span className="text-xs sm:text-sm text-green-300 truncate">
            vaibhavpari@portfolio: ~
          </span>
        </div>

        {/* Profile */}
        <div className="p-4 flex flex-col items-center border-b border-green-500">
          <img
            src={profileImg}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-green-500 mb-2"
          />
          <h1 className="text-lg text-green-300">Vaibhav Pari</h1>
          <p className="text-sm text-green-400">MERN Stack Developer</p>
        </div>

        {/* Terminal Body */}
        <div className="p-3 sm:p-4 text-xs sm:text-sm md:text-base h-[600px] overflow-y-auto">
          {/* Always show welcome message */}
          {welcomeMessage.map((line, i) => (
            <pre
              key={`welcome-${i}`}
              className="whitespace-pre-wrap text-green-200"
            >
              {line}
            </pre>
          ))}

          {/* History */}
          {history.map((entry, i) => (
            <pre
              key={i}
              className={`whitespace-pre-wrap ${
                entry.type === "error"
                  ? "text-red-400"
                  : entry.type === "command"
                  ? "text-green-500"
                  : entry.type === "loading"
                  ? "text-yellow-400"
                  : "text-green-200"
              }`}
            >
              {entry.text}
            </pre>
          ))}

          {/* Command input */}
          <div className="flex mt-1">
            <span className="text-green-500">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !loading && handleCommand()
              }
              className="bg-black flex-1 outline-none text-green-200 ml-2"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}
