import searchSVG from '../assets/images/search_icon.svg';

const inputButtonStyle = {
    borderRadius: "0 4px 4px 0"
}

export function SearchButton() {
    return (
        <button className="btn btn-primary" style={inputButtonStyle}>
            <img src={searchSVG} alt="Lupa" />
        </button>
    )
}