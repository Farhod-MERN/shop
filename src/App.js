// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Shop } from './Components/Shop';
import Footer from './Components/Footer';
import {ToastContainer} from "react-toastify";


function App() {
  return (
    <div className="App">
      <ToastContainer />
     <Header />
     <Shop />
     <Footer />
    </div>
  );
}

export default App;
