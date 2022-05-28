export async function searchByPostalCode(postalCode) {
    const BASE_URL = "http://localhost:5000/sellers";
    const endpoint = BASE_URL + `?postalCode=${postalCode}`;

    try {
        const request = await fetch(endpoint, { method: "GET", cache: "no-cache" });
        const jsonData = await request.json();
        return jsonData;
    }
    catch (error) {
        alert(`Não foi possível carregar as lojas\nErro:\n${error}`);
    }
}

export async function searchProductsBySellerName(sellerName) {
    const BASE_URL = "http://localhost:5000/products";
    const endpoint = BASE_URL + "?fq=" + sellerName;

    try {
        const request = await fetch(endpoint, { method: "GET", cache: "no-cache" });
        const jsonData = await request.json();
        return jsonData;
    }
    catch (error) {
        alert(`Não foi possível carregar os produtos\nErro:\n${error}`);
    }
}