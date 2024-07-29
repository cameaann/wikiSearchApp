import useTheme from "../hooks/useTheme";

const SwitchModes = () => {
  const [theme, handleClick] = useTheme("light");
  return (
    <button className="switchBtn" onClick={handleClick}>
      <span className="btn-word">{theme === "light" ? "Dark" : "Light"}</span>
      <i
        className={theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"}
      ></i>
    </button>
  );
};

export default SwitchModes;
