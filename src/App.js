import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
