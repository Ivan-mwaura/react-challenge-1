import React from 'react'

function Header(){
return(
    <div>
        <header>
                <nav className='nav' >
                <img src={"logo192.png"}  className='nav-logo' alt={"Missing"} />
                <h1 className='heading_1'>React Facts</h1>
                <ul className='navbar'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
            </header>
    </div>
);
}
export default Header;