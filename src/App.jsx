import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SearchInput } from './components/SearchInput';
import { SearchButton } from './components/SearchButton';
import { ProductCard } from './components/ProductCard';
import { Modal } from './components/Modal';
import { searchProductsBySellerName, searchByPostalCode } from './utils/api_client';
import logoImage from './assets/images/logo.png';
import simplifyProductObject from './utils/simplifyProduct';

function App() {
  const [postalCode, setPostalCode] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [products, setProducts] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    productName: "",
    brand: "",
    link: "",
    image: "",
    description: "",
    price: 0
  });

  const handlePostalCodeInput = (e) => {
    setPostalCode(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // remove dash symbol from postal code
    let postalCodeValue = postalCode.replace("-", "");

    // request seller from API
    const foundSellers = await searchByPostalCode(postalCodeValue);

    // get the first seller and update state
    const nearestSellerName = foundSellers[0]["sellers"][0]["name"];
    setSellerName(nearestSellerName);
  }

  const loadProducts = async () => {
    // request the products in the API
    let foundProducts = await searchProductsBySellerName(sellerName);

    // remove unused properties from the json object
    foundProducts = foundProducts.map((productObject) => {
      return simplifyProductObject(productObject);
    });

    // update state to show the products in the page
    setProducts(foundProducts);
  }

  return (
    <div className="App">
      {isModalVisible ? (
        <Modal onClose={() => setModalVisible(false)} content={modalContent} />
      ) : null}
      <header>
        <Navbar />
      </header>
      <main className="container">
        <section>
          <div id="searchByPostalCode">
            <h1>Pesquisa por CEP</h1>
            <form className="input-group" onSubmit={handleSubmit}>
              <SearchInput name="postalcode" placeholder="09851-350" value={postalCode} onChange={handlePostalCodeInput} />
              <SearchButton />
            </form>
            <div className="my-2">
              <a href="https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php" rel="external" target="_blank" title="Busca CEP | Correios" style={{ color: "gray", textDecoration: "underline" }}>Não sei meu CEP</a>
            </div>
          </div>
          {sellerName ? (
            <div style={{ maxWidth: "512px", margin: "1rem auto" }}>
              <p>Loja mais próxima encontrada</p>
              <div className="card" style={{ maxWidth: "270px" }}>
                <h4 style={{ textAlign: "center" }}>{sellerName}</h4>
                <img src={logoImage} alt="Logo" />
                <button className="btn btn-primary" onClick={loadProducts}>Selecionar</button>
              </div>
            </div>
          ) : null}
        </section>
        {products.length !== 0 ? (
          <section style={{ marginTop: "4rem", marginBottom: "4rem", marginLeft: "auto", width: "90%" }}>
            <h3>Produtos</h3>
            <div id="productsContainer">
              {
                products.map((product) => <ProductCard key={product.id} productObject={product} openModal={() => {
                  setModalContent(product)
                  setModalVisible(true)
                }
                } />)
              }
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}

export default App
