import "./navbar.styles.scss";
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-menu'>
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>
      <div className='navbar-logo'>
        <h1>Shay-Asanova</h1>
      </div>
      <div className='navbar-resume'>
        <span>CV</span>
      </div>
    </div>
  );
};

export default Navbar;
