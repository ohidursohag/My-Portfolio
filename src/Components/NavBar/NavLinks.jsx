import { Link, useLocation } from "react-router-dom";

const NavLinks = ({setIsOpen }) => {
   const loc = useLocation()
   // console.log(loc.hash);
return(
   <>
      <Link onClick={() => setIsOpen(false)} to='#home' className={` text-lg font-medium ${loc.hash === '#home' ?'  neonText':''}`}>Home</Link>
      <Link onClick={() => setIsOpen(false)} to='#about' className={` text-lg font-medium ${loc.hash === '#about' ? '  neonText' : ''}`}>About</Link>
      <Link onClick={() => setIsOpen(false)} to='#projects' className={` text-lg font-medium ${loc.hash === '#projects' ? '  neonText' : ''}`}>My Projects</Link>
   </>
   )
}
import PropTypes from 'prop-types';
NavLinks.propTypes = {
   setIsOpen: PropTypes.func,
}
export default NavLinks;