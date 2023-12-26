import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'HOFA'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactButton/>
      </header>
    </div>
  );
}

function ReactButton(userName) {
  const link = 'https://reactjs.org';
  return (
    <a
      className="App-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      Learn React, {userName}
    </a>
  )
}

export default App;
