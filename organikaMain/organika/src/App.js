import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1 className="pogi">Hello World!!!</h1>

      <QuantityPicker></QuantityPicker>
      <Footer></Footer>
    </div>
  );
}

export default App;
