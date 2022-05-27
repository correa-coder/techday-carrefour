export default function simplifyProductObject(productObject) {
    /* reduce the information from the json that comes from the API  */
    const simplifiedProduct = {};
    simplifiedProduct["productName"] = productObject["productName"];
    simplifiedProduct["brand"] = productObject["brand"];
    simplifiedProduct["description"] = productObject["description"];
    simplifiedProduct["link"] = productObject["link"];
    simplifiedProduct["image"] = productObject["items"][0]["images"][0]["imageUrl"];
    simplifiedProduct["price"] = productObject["items"][0]["sellers"][0]["commertialOffer"]["Price"];
    return simplifiedProduct;
}