import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const darkThemeClassName = isDarkTheme ? 'home-dark-theme' : ''
        const homeImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        return (
          <div className={`home-container ${darkThemeClassName}`}>
            <img className="home-img" src={homeImgUrl} alt="home" />
            <h1 className={`home-heading ${darkThemeClassName}`}>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
