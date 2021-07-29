import Margin from '../shared/margin'
import './Menu.css'

function Menu() {
    
    return(
        <Margin margin="5px">
         <div className="menu-container">
         <div className="button">
              <span>+</span>
            </div>
            <div className="button">
              <span>=</span>
            </div>
        </div>

        </Margin>
    )
}

export default Menu