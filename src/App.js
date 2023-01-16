import logo from './logo.svg';
import './App.css';
import Formik from './formik.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formik />
      </header>
    </div>
  );
}

export default App;
