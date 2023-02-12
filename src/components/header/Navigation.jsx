import Button from "../button/Button";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./navigation.css";

const Navigation = () => {
  return (
    <>
      <header>
        <nav className="nav-container">
          <div className="nav-items logo-container">
            <Logo className="logo" />
            <text className="svg-text">H</text>
          </div>

          <div className="nav-items">
            <ol className="nav-links">
              <a href="#">
                <li>About</li>
              </a>

              <a href="#">
                <li>Work</li>
              </a>

              <a href="#">
                <li>Contact</li>
              </a>
            </ol>
          </div>

          <div className="nav-items">
            <Button>Resume</Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
