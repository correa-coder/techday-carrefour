import { Navbar } from './components/Navbar';
import { InputGroup } from './components/InputGroup';

function App() {

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="container">
        <section>
          <div id="searchByPostalCode" style={{ width: "50%", margin: "4rem auto" }}>
            <h1>Pesquisa por CEP</h1>
            <InputGroup placeholder="09851-350" />
            <div className="my-2">
              <a href="https://buscacepinter.correios.com.br/app/localidade_logradouro/index.php" rel="external" target="_blank" title="Busca CEP | Correios" style={{ color: "gray", textDecoration: "underline" }}>Não sei meu CEP</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
