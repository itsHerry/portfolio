function Link({ text, section, activeLink, active }) {
  return (
    <a className="sidebar-buttons" href={`#${section}`}>
      <span onClick={activeLink} className={active ? "links active" : "links"}>
        {text}
      </span>
    </a>
  );
}

export default Link;
