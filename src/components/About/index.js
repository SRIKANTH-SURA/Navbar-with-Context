import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const darkThemeClassName = isDarkTheme ? 'about-dark-theme' : ''
        const aboutImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        return (
          <div className={`about-container ${darkThemeClassName}`}>
            <img className="about-img" src={aboutImgUrl} alt="about" />
            <h1 className={`about-heading ${darkThemeClassName}`}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
