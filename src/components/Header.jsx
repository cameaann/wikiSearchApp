import SwitchModes from "./SwitchModes";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logobox">
          <img src="" alt="logo" />
          <span className="header-title">Wiki</span>
        </div>
        <SwitchModes />
      </div>
    </header>
  );
};

export default Header;
