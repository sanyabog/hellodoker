import logo from './logo.svg';
import './App.css';
import axios from "axios";

const makeApiRequest = () => {
    axios.get("/api/users")
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error("Error making API request:", error);
        });
};

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>
                  Edit <code>src/App.js</code> and save to reload.fff
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
              <button onClick={makeApiRequest}>Make a Request</button>
          </header>
      </div>
  );
}

export default App;
