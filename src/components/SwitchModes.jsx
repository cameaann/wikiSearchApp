
import useTheme from "../hooks/useTheme";

const SwitchModes = () =>{

    const [theme, handleClick] = useTheme('light');
    return(
        <button className="switchBtn" onClick = {handleClick}>
            <span className="btn-word">{theme === 'light' ? 'Dark':'Light'}</span>
        </button>
    )
}

export default SwitchModes;