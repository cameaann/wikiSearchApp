import SwitchModes from "./SwitchModes";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logobox">
          {/* <img src= "./Wiki.svg" alt="logo" /> */}
        </div>
        <SwitchModes />
      </div>
    </header>
  );
};

export default Header;
