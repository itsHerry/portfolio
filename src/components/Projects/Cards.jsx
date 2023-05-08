import Card from "./Card";
import "./projects.css";
import bday from "./lainey.png";
import ruby from "./ruby.png";
import portfolio from "./portfolio.png";
import tictactoe from "./tictactoe.png";

function Cards() {
  const cardsData = [
    {
      id: 1,
      info: "Birthday Wish",
      link: "https://1rkf4f.csb.app/",
      img: bday,
    },
    {
      id: 2,
      info: "Tenzies",
      link: "https://036thh.csb.app/",
      img: ruby,
    },
    {
      id: 3,
      info: "TicTacToe",
      link: "https://yuuq25.csb.app/",
      img: tictactoe,
    },
    {
      id: 4,
      info: "Portfolio",
      link: "#home",
      img: portfolio,
    },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((cardData) => (
        <Card
          key={cardData.id}
          img={cardData.img}
          link={cardData.link}
          info={cardData.info}
        />
      ))}
    </div>
  );
}

export default Cards;
