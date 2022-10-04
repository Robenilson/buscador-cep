import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css"
import Axios from "./services/api";

function App() {
  const baseURL = "https://viacep.com.br/ws";
  const [input, setInput] = useState('')
  const [endereco, setCet] = useState({});

  async function Teste() {


    if (input === '') {
      alert(" Campo Vazio")
      return;

    } else {
      try {
        const response = await Axios.get(`${baseURL}/${input}/json`);
        setCet(response.data)
        setInput("")
      } catch {
        alert(" Erro pesquisa")
        setInput("")
      }
    }
  }

  return (
    
    <div className="container">
      <h1 className="title">Buscar Cep</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}

        />
        <button
          onClick={Teste}
          className="buttonSearch"  >
          <FiSearch size={25} color="black" /> </button>
      </div>

      {Object.keys(endereco).length > 0 && (

        <main className="main">
          <span> Cep  {endereco.cep} </span>
          <span> Logradouro {endereco.logradouro} </span>
          <span> Localidade: {endereco.localidade}</span>
          <span> Bairro  {endereco.bairro}  </span>
          <span> UF  {endereco.uf} </span>

        </main>



      )}
      <main >
      </main>


    </div>
  );
}

export default App;
