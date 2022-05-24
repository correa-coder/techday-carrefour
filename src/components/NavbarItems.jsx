import personSVG from '../assets/images/person.svg';
import coinSVG from '../assets/images/coin.svg';
import boxSVG from '../assets/images/shipping_box.svg';

const navbarItemsStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    width: "30%"
}

export function NavbarItems() {
    return (
        <div style={navbarItemsStyle}>
            <div className="navbar-item">
                <img src={personSVG} alt="Usuário" style={{width:"28px"}} />
                <div className="px-1"><strong>Bem-vindo</strong><br />Entrar</div>
            </div>
            <div className="navbar-item">
                <img src={coinSVG} alt="Moeda" />
                <div className="px-1">Meu Carrefour</div>
            </div>
            <div className="navbar-item">
                <img src={boxSVG} alt="Caixa" />
                <div className="px-1">Meus Pedidos</div>
            </div>
        </div>
    );
}