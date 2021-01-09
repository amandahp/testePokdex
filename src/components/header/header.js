import React from 'react'
import  './header.scss'
import pokemon from '../../utils/Poké_Ball.svg.png'



const Header = () => {
    return (
        <header>
            <div id="top_element"></div>
            <div id="main_element">
              <div id="icon_circle">
                <div id="icon_background">
                    <img src={pokemon}></img>
                </div>
              </div>
            </div>
        </header>
    )
}

export default Header