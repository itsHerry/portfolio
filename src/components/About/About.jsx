import "./about.css";
import Account from "./Account";
import me from "./MeWithoutFace.jpg";

function About() {
  const accountsData = [
    { id: 1, link: "https://github.com/itsHerry", icon: "logo-github" },
    {
      id: 2,
      link: "https://www.linkedin.com/in/itsherry",
      icon: "logo-linkedin",
    },
    {
      id: 3,
      link: "https://www.facebook.com/narcissistic.herry",
      icon: "logo-facebook",
    },
    {
      id: 4,
      link: "https://www.instagram.com/narcissistic_herry/",
      icon: "logo-instagram",
    },
  ];

  return (
    <div className="about-me">
      <div className="image">
        <img className="my-profile" src={me} alt="My Face" />
      </div>
      <div className="about-text">
        <h1 className="my-name">Herry Qureshi</h1>
        <p className="bio">
          Hello, I am Herry Qureshi and I am a Web Developer and Designer.
          <br />I love to work on new projects and beautiful designs.
        </p>
      </div>
      <div className="accounts">
        {accountsData.map((accountData) => (
          <Account
            key={accountData.id}
            icon={accountData.icon}
            link={accountData.link}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
