import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Header = () =>
{
    const [darkMode, setDarkMode] = useState(false);
    const { color } = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="Header">
            <h1 style={{ color }}>ReactHooks</h1>
            <button onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    );
}