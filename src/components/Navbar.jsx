import brandingImage from '../assets/images/branding.png';
import listSVG from '../assets/images/bs-list.svg';
import {NavbarItems} from './NavbarItems';

const navbarStyle = {
    padding: "1rem 0",
    boxShadow: "rgba(0, 0, 0, 0.75) 0px 0px 13px -3px"
}

export function Navbar() {
    return (
        <nav style={navbarStyle}>
            <div className="container" style={{display: "flex", justifyContent: "space-between"}}>
                <a href="#">
                    <img src={brandingImage} alt="Logo Carrefour" />
                </a>
                <div className="navbar-toggle">
                    <img src={listSVG} alt="Lista de itens" />
                </div>
                <NavbarItems />
            </div>
        </nav>
    );
}