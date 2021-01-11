import React, {useState}  from 'react';
	
import './navigationMenu.css';


export const NavigationMenu = () => {

    const [toggleMenu, setToggleMenu] = useState(true);




    return (
        <div className={toggleMenu ? 'NavigationMenuOpen':'NavigationMenuClose'}  id="NavigationMenu">
            NavigationMenu
		<button className={toggleMenu ? 'display':'displayNone'} id="open" onClick={() => setToggleMenu(!toggleMenu)}> open</button>
		<button className={toggleMenu ? 'displayNone':'display'} id="close" onClick={() => setToggleMenu(!toggleMenu)}> close</button>
        </div>
    )
}
