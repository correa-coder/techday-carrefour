import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SearchInput } from './components/SearchInput';
import { SearchButton } from './components/SearchButton';
import { ProductCard } from './components/ProductCard';
import { Modal } from './components/Modal';
import logoImage from './assets/images/logo.png';
import mockProducts from './utils/mock_data';


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

  const searchByPostalCode = async (postalCode) => {
    const BASE_URL = "http://localhost:5000/sellers";
    const endpoint = BASE_URL + `?postalCode=${postalCode}`;

    try {
      const request = await fetch(endpoint, {method: "GET", cache: "no-cache"});
      const jsonData = await request.json();
      // get the first seller and update state
      setSellerName(jsonData[0]["sellers"][0]["name"]);
    }
    catch (error) {
      alert(`Não foi possível carregar as lojas\nErro:\n${error}`);
    }
  }

  const searchProductsBySellerName = async () => {
    const BASE_URL = "http://localhost:5000/products";
    const endpoint = BASE_URL + "?fq=" + sellerName;

    try {
      const request = await fetch(endpoint, {method: "GET", cache: "no-cache"});
      const jsonData = await request.json();
      console.log(jsonData);
    }
    catch (error) {
      alert(`Não foi possível carregar os produtos\nErro:\n${error}`);
    }
  }

  const loadProducts = async () => {
    // request the products in the API
    let foundProducts = await searchProductsBySellerName();

    // remove unused properties from the json object
    foundProducts = foundProducts.map((productObject) => {
      return simplifyProductObject(productObject);
    });

    // update state to show the products in the page
    setProducts(foundProducts);
  }

  const handlePostalCodeInput = (e) => {
    setPostalCode(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // remove dash symbol from postal code
    let postalCodeValue = postalCode.replace("-", "");
    searchByPostalCode(postalCodeValue);
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
          <div id="searchByPostalCode" style={{ width: "50%", margin: "4rem auto" }}>
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
            <div style={{ width: "50%", margin: "1rem auto" }}>
              <p>Loja mais próxima encontrada</p>
              <div className="card" style={{ width: "36%" }}>
                <h4 style={{ textAlign: "center" }}>{sellerName}</h4>
                <img src={logoImage} alt="Logo" />
                <button className="btn btn-primary" onClick={loadProducts}>Selecionar</button>
              </div>
            </div>
          ) : null}
        </section>
        {products.length !== 0 ? (
          <section>
            <h3>Produtos</h3>
            <div id="productsContainer">
              {
                products.map((product) => <ProductCard productObject={product} openModal={() => {
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
