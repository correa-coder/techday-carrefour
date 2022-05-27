const brandStyle = {
    color: "rgb(30, 91, 198)",
    fontWeight: 400,
    textDecoration: "underline",
    cursor: "pointer"
}

export function Modal(props) {
    const handleOutsideClick = (e) => {
        /* close the modal after clicking outside the modal content */
        if (e.target.className === "modal") props.onClose();
    }

    return (
        <div className="modal" onClick={handleOutsideClick}>
            <div className="container">
                <button className="modal-close-btn" onClick={props.onClose}>x</button>
                <div className="modal-content">
                    <h2>{props.content.productName}</h2>
                    <div style={{ fontSize: ".9rem" }}>
                        Marca: <span style={brandStyle}>{props.content.brand}</span>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ maxWidth: "200px" }}>
                            <img src={props.content.image} alt={props.content.productName} className="img-fluid" />
                        </div>
                        <p className="modal-description">{props.content.description}</p>
                    </div>
                    <div className="product-price-lg">
                        R$ {props.content.price}
                    </div>
                </div>
            </div>
        </div>
    )
}