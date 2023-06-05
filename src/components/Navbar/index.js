import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickThemeBtn = () => {
        toggleTheme()
      }
      const darkThemeClassName = isDarkTheme ? 'dark-theme' : ''
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const websiteThemeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <header className={`website-header ${darkThemeClassName}`}>
          <div className="website-logo">
            <img
              className="website-logo-img"
              src={websiteLogoUrl}
              alt="website logo"
            />
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className={`nav-link ${darkThemeClassName}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${darkThemeClassName}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="website-theme">
            <button
              className="theme-button"
              type="button"
              data-testid="theme"
              onClick={onClickThemeBtn}
            >
              <img
                className="website-theme-img"
                src={websiteThemeUrl}
                alt="theme"
              />
            </button>
          </div>
        </header>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
