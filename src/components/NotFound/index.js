// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const notFoundHeadingTextClassName = isDarkTheme
        ? 'not-found-heading-para-light'
        : 'not-found-heading-para-dark'

      const notFoundContentTextClassName = isDarkTheme
        ? 'not-found-content-para-light'
        : 'not-found-content-para-dark'

      return (
        <div className={`not-found-app-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="not-found-response-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1
                className={`not-found-heading ${notFoundHeadingTextClassName}`}
              >
                Lost Your Way?
              </h1>
              <p
                className={`not-found-content ${notFoundContentTextClassName}`}
              >
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
