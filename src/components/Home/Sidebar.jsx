import Links from "./Links";

function Sidebar({ showMenu, icon, linksData, setLinksData }) {
  const activeLink = (id) => {
    setLinksData(
      linksData.map((linkData) => {
        if (linkData.id === id && linkData.active === false) {
          return { ...linkData, active: true };
        } else if (linkData.id !== id && linkData.active === true) {
          return { ...linkData, active: false };
        } else {
          return linkData;
        }
      })
    );
  };

  return (
    <div className="sidebar">
      <Links linksData={linksData} activeLink={activeLink} />
      <button onClick={showMenu} className="button">
        <ion-icon name={icon}></ion-icon>
      </button>
    </div>
  );
}

export default Sidebar;
