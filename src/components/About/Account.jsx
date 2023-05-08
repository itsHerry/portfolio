function Account({ link, icon }) {
  return (
    <a href={link} target={"_blank"} rel="noreferrer" className="account-link">
      <ion-icon name={icon}></ion-icon>
    </a>
  );
}

export default Account;
