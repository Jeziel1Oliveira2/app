import logo from '../logo.svg';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <div>
            <form>
              <label>
                  Digite seu nome:
              </label>
                <input type="text" name='Nome'>
                </input>
                <input type='submit' value='enviar'>
                </input>
            </form>
          </div>
      </div>
    </div>
  );
}

export default App;
