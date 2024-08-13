import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '10px',
    color: '#fff',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
  };

  const activeLinkStyle = {
    backgroundColor: '#555',
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>Home</Link>
      <Link to="/about" style={linkStyle} activeStyle={activeLinkStyle}>About</Link>
      <Link to="/services" style={linkStyle} activeStyle={activeLinkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle} activeStyle={activeLinkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
