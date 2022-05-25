const inputStyle = {
    borderRadius: "4px 0 0 4px",
    fontSize: "1.1rem"
}

export function SearchInput(props) {
    return (
        <input type="text" placeholder={props.placeholder} style={inputStyle} />
    )  
}