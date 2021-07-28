
import "./Header.css";
import header from '../../logo.svg'
function Header() {
  return (
    <div className="main_header">
      <div className="container">
        <div className="logo">
          <div className="logo-svg">
            <img src={header} alt="logo" />
          </div>
          <div className="logo-name">
            exNote
          </div>
        </div>
        <div className="user">
          <div className="nothing"></div>
          <div className="user-r">
            <div className="show_div">
              <span>j</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header