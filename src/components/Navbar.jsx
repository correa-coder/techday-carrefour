import brandingImage from '../assets/images/branding.png';

const navbarStyle = {
    padding: "1rem 0",
    boxShadow: "rgba(0, 0, 0, 0.75) 0px 0px 13px -3px"
}

export function Navbar() {
    return (
        <nav style={navbarStyle}>
            <div className="container">
                <a href="#">
                    <img src={brandingImage} alt="Logo Carrefour" />
                </a>
            </div>
        </nav>
    );
}