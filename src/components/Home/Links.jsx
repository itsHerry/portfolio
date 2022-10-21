import Link from "./Link";

function Links({ linksData, activeLink }) {
  return (
    <div className="showMenu">
      {linksData.map((linkData) => (
        <Link
          key={linkData.id}
          active={linkData.active}
          text={linkData.text}
          section={linkData.section}
          activeLink={() => activeLink(linkData.id)}
        />
      ))}
    </div>
  );
}

export default Links;
