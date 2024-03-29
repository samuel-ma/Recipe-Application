import './App.css';
import Category from './Components/Category';
import Pages from './Pages/Pages';
import About from './Components/About';
import { BrowserRouter } from 'react-router-dom';
import Search from "./Components/Search";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Search />
          <Category />
          <Pages />
          <About />
      </BrowserRouter>
    </div>
  );
}


export default App;
