export function ProductCard(props) {
    return (
        <div className="card">
            <a href={props.productObject.link} rel="external" target="_blank">
                <img src={props.productObject.image} alt={props.productObject.productName} className="img-fluid" />
                <h3 className="product-title">{props.productObject.productName}</h3>
                <div className="product-price">
                    R$ {props.productObject.price}
                </div>
            </a>
            <button className="btn btn-primary" onClick={ props.openModal }>visualizar</button>
        </div>
    )
}