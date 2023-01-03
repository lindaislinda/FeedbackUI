//Shortcut: impt
import PropTypes from 'prop-types'

//Shortcut: rfce
function Header({text, bgColor, textColor}) {
  return (
    <header style = {{backgroundColor : bgColor}}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "FeedbackUI",
    bgColor: "#7B2869",
    textColor: "white"
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header