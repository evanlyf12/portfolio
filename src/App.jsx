import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import InfoCard from "./InfoCard";
import arrowIcon from "./assets/arrow.svg";
import lightIcon from "./assets/light_icon.svg";
import darkIcon from "./assets/dark_icon.svg";

function App() {
  const localDarkMode = localStorage.getItem("DARK_MODE");
  const [isDarkMode, setIsDarkMode] = useState(localDarkMode || true);
  const [works, setWorks] = useState([
    {
      id: uuid(),
      title: "The Wheel",
      description:
        "A modern, sleek, and responsive UI interface for a fictional news outlet. Reproduced as part of a coding challenge at Frontend Mentor.",
      technologies: ["HTML, CSS"],
      link: "https://evanlyf12.github.io/wheel",
      displayLink: "evanlyf12.github.io/wheel",
      images: [],
    },
    {
      id: uuid(),
      title: "devfinder",
      description:
        "A simple yet handy app to help you find a GitHub profile and possibly your next star developer.",
      technologies: ["HTML, CSS, JavaScript", "GitHub API"],
      link: "https://evanlyf12.github.io/devfinder",
      displayLink: "evanlyf12.github.io/devfinder",
      images: [],
    },
  ]);
  const emptyWork = {
    id: "",
    title: "",
    description: "",
    technologies: [],
    link: "",
    displayLink: "",
    images: [],
  };
  const [selectedWork, setSelectedWork] = useState(emptyWork);
  const [infoCardVisibility, setInfoCardVisibility] = useState(false);

  const latestWorks = works.map((work) => (
    <li
      key={work.id}
      className="work-item"
      onClick={() => displaySelectedWork(work)}
    >
      <span className="work-title">{work.title}</span>
      <img
        src={arrowIcon}
        className={
          "work-arrow " +
          (work.id === selectedWork.id ? "open" : "close") +
          (!isDarkMode ? " light" : "")
        }
      />
    </li>
  ));

  const displaySelectedWork = (work) => {
    if (work.id === selectedWork.id) {
      setInfoCardVisibility(false);
      setSelectedWork((oldWork) => {
        return { ...oldWork, id: "" };
      });
    } else if (selectedWork.id === "") {
      setSelectedWork(work);
      setInfoCardVisibility(true);
    } else {
      setSelectedWork(work);
      setInfoCardVisibility(true);
    }
  };

  const handleThemeChange = () => {
    let root = document.getElementsByTagName("body")[0];
    root.classList.toggle("light");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div id="frame" className={!isDarkMode ? "light" : ""}>
        <div id="content">
          <span id="top-greeting">
            <span className="greeting-header">Hi, I'm Evan</span>
            <span className="greeting-subheader">Frontend developer</span>
          </span>
          <span>
            <img
              src={isDarkMode ? lightIcon : darkIcon}
              className={"theme-icon" + (!isDarkMode ? " light" : "")}
              onClick={handleThemeChange}
            />
          </span>
          <span id="bottom-greeting">Welcome</span>

          <span id="works-container">
            <div className="works-header">My Latest Works</div>
            <ul className="works-list">{latestWorks}</ul>
          </span>

          <div
            id="info-container"
            className={
              (infoCardVisibility ? "visible" : "hidden") +
              (!isDarkMode ? " light" : "")
            }
          >
            <div className="sidebar-placeholder"></div>
            <div id="info-content">
              <InfoCard data={selectedWork} darkMode={isDarkMode} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
