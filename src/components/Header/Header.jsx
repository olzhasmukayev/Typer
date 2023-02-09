import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="hedaer-left">
        <p className="header-logo">Typer</p>
      </div>
      <div className="hedaer-right">
        <p>Profile</p>
        <p>Statistics</p>
        <p>Settings</p>
      </div>
    </header>
  );
};

export default Header;
