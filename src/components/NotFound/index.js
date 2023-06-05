import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const darkThemeClassName = isDarkTheme ? 'notfound-dark-theme' : ''

        return (
          <div className={`notfound-container ${darkThemeClassName}`}>
            <img
              className="notfound-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`notfound-heading ${darkThemeClassName}`}>
              Lost Your Way?
            </h1>
            <p className={`notfound-description ${darkThemeClassName}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
