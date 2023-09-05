import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //This code is commonly used in React applications to define the structure of a component
    //JSX Code: Inside the return statement, you have JSX code. JSX is a syntax extension for 
    //JavaScript that allows you to write HTML-like code within your JavaScript files. 
    //It's used to describe the structure of your user interface.
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
