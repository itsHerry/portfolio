function Card({ info, link, img }) {
  return (
    <div className="card">
      <a
        href={link}
        target={"_blank"}
        rel="noreferrer"
        className="project-link"
      >
        <p className="project-name">{info}</p>
        <div className="img-container">
          <img className="img" src={img} alt="Thumbnail" />
        </div>
      </a>
    </div>
  );
}

export default Card;
