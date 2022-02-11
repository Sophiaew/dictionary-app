import "./App.css";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <h1>Hello!</h1>
      <a href="/" className="btn btn-primary">
        Test
      </a>
    </div>
  );
}
