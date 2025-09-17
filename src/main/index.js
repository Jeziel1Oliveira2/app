import logo from '../logo.svg';
import './index.css';
import { useState } from 'react';


function imc (peso, altura) {
  let mult = altura * altura;
  let div = peso / mult;
  return div.toFixed(2)
};

function App() {
  let [peso, setPeso] = useState('');
  let [altura, setAltura] = useState('');

  let [resultadoImc, setResultadoImc] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    let calcularImc = imc(peso, altura);
    setResultadoImc(calcularImc);
  };

  return (
    <div className="App">
      <div className="App-header">
          <div>
            <form onSubmit={handleSubmit}>
              <label>
                  Digite seu nome:
              </label>
              <input type="text" name='Nome' />
              <label>
                  Digite sua idade:
              </label>
              <input type="number" name='Idade'/>
              <label>
                  Digite seu peso:
              </label>
              <input 
                type="number" 
                name='Peso'
                value={peso} 
                onChange={(e) => setPeso(e.target.value)} 
              />
              <label>
                Digite sua altura:
              </label>
              <input 
                type='number' 
                name='Altura'
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
              
              <input type='submit' value='Enviar'>
              </input>
            </form>
          </div>

          <div>
            <p>
              Seu IMC é: {resultadoImc}
            </p>
          </div>
      </div>
    </div>
  );
}

export default App;
