import React from 'react' 
import './Navbar.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
function Navbar(props) {
    return (
        <div className='navbar'>
          <div className='logo'> dev-graVity  </div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/akash-sirohi-676b30202/"><AiFillLinkedin className='social lin'/></a>
            <a href="https://github.com/belikeakash"><AiFillGithub className='social git' /></a>
          </div>
        </div>
    )
}

export default Navbar;
