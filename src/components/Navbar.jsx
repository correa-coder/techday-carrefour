import brandingImage from '../assets/images/branding.png';
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
                <NavbarItems />
            </div>
        </nav>
    );
}