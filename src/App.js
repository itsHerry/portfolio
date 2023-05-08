import { useEffect } from "react";
import { useState } from "react";
import Letters from "./components/Home/Letters";
import Sidebar from "./components/Home/Sidebar";
import Cards from "./components/Projects/Cards";
import Form from "./components/Contact/Form";
import About from "./components/About/About";

function App() {
  const firstLineData = [
    { id: 1, text: "H" },
    { id: 2, text: "i" },
    { id: 3, text: "," },
    { id: 4, text: "I" },
    { id: 5, text: "a" },
    { id: 6, text: "m" },
    { id: 7, text: "H" },
    { id: 8, text: "e" },
    { id: 9, text: "r" },
    { id: 10, text: "r" },
    { id: 11, text: "y" },
    { id: 12, text: "Q" },
    { id: 13, text: "u" },
    { id: 14, text: "r" },
    { id: 15, text: "e" },
    { id: 16, text: "s" },
    { id: 17, text: "h" },
    { id: 18, text: "i" },
    { id: 19, text: "." },
  ];

  const [linksData, setLinksData] = useState([
    { id: 1, text: "Home", active: true, section: "home" },
    { id: 2, text: "Projects", active: false, section: "projects" },
    { id: 3, text: "Contact", active: false, section: "contact" },
    { id: 4, text: "About", active: false, section: "about" },
  ]);

  const [icon, setIcon] = useState("home-outline");

  // Setting Icon for Specific Section Clicked
  useEffect(() => {
    linksData.forEach((linkData) => {
      if (linkData.active && linkData.text === "Home") {
        setIcon("home");
      } else if (linkData.active && linkData.text === "Projects") {
        setIcon("book");
      } else if (linkData.active && linkData.text === "Contact") {
        setIcon("person-add");
      } else if (linkData.active && linkData.text === "About") {
        setIcon("man");
      }
    });
  }, [linksData]);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    let scrollPos = 0;
    const button = document.querySelector(".button");

    function checkPosition() {
      let windowY = window.scrollY;
      if (windowY < scrollPos) {
        // Scrolling UP
        button.style.top = 0;
      } else {
        // Scrolling DOWN
        button.style.top = "-100%";
      }
      scrollPos = windowY;
    }

    if (windowWidth < 850) {
      window.addEventListener("scroll", checkPosition);
    }
  }, []);

  // Showing Menu on Clicking Button
  const showMenu = () => {
    document.querySelector(".showMenu").classList.toggle("semi-circle");
    document.getElementById("transparent").classList.toggle("transparent");
  };

  return (
    <>
      <div onClick={showMenu} id="transparent"></div>
      <div id="home">
        <Letters firstLineData={firstLineData} />
        <Sidebar
          showMenu={showMenu}
          linksData={linksData}
          setLinksData={setLinksData}
          icon={icon}
        />
      </div>
      <div id="projects">
        <h1 className="projects">Projects</h1>
        <Cards />
      </div>
      <div id="contact">
        <Form />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
}

export default App;
