const inputGroupStyle = {
    display: "grid",
    gridTemplateColumns: "9fr 1fr",
    width: "50%"
}

const inputStyle = {
    borderRadius: "4px 0 0 4px",
    fontSize: "1.1rem"
}

const inputButtonStyle = {
    borderRadius: "0 4px 4px 0"
}

export function InputGroup(props) {
    return (
        <div style={inputGroupStyle}>
            <input type="text" id="postalCodeInput" placeholder={props.placeholder} style={inputStyle} />
            <button id="searchByPostalCodeButton" className="btn btn-primary" style={inputButtonStyle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20"
                    height="20">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
    );
}