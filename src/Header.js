import logo from './assets/logo.png';
import './styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="nav-wrapper">
        <h1>Accueil</h1>
        <h1>A Propos</h1>
      </div>
    </div>
  );
}

export default Header;
