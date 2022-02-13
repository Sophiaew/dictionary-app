import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="mt-2">
          <small>
            This code is{" "}
            <a
              href="https://github.com/Sophiaew/dictionary-app"
              rel="noreferrer noopener"
              target="_blank"
            >
              open source
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
