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
  const [sellerName, setSellerName] = useState("Carrefour");
  const [products, setProducts] = useState(mockProducts);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    productName: "",
    brand: "",
    link: "",
    image: "",
    description: "",
    price: 0
  });

  const searchByPostalCode = (postalCode) => {
    const BASE_URL = "http://localhost:5000/sellers";

    // build the query string
    let queryURL = BASE_URL + `?postalCode=${postalCode}`;

    // http request
    fetch(queryURL, {
      method: "GET",
      cache: "no-cache"
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      .catch(error => console.log("ERROR: " + error.message))
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
          <div style={{ width: "50%", margin: "1rem auto" }}>
            <p>Clique em selecionar para carregar os produtos</p>
            <div className="card" style={{ width: "36%" }}>
              <h4 style={{ textAlign: "center" }}>{sellerName}</h4>
              <img src={logoImage} alt="Logo" />
              <button className="btn btn-primary">Selecionar</button>
            </div>
          </div>
        </section>
        <section>
          <h3>Produtos</h3>
          <div id="productsContainer">
            {
              products.map((product) => <ProductCard productObject={product} />)
            }
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
