import { Link } from "react-router-dom";
import { useDarkTheme } from "../context/ThemeContext";


const Header = () => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <header>
      <div className="header">
        <span>
          <Link to="/home">
            <h3>RESTAURANT</h3>
          </Link>
        </span>

        <div className="header-buttons">
        <div className="theme-mode" onClick={toggleDarkTheme}>
          {darkTheme ? (
            <i className="far fa-sun"></i>
          ) : (
            <i className="far fa-moon"></i>
          )}
        </div>
        <div className="favorites">          
          <Link to="/favorites">
            <i className="fas fa-heart"></i>
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
