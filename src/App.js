import './App.css';
import Category from './Components/Category';
import Pages from './Pages/Pages';
import About from './Components/About';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <h1>Hello World</h1>
          <Category />
          <Pages />
          <About />
      </BrowserRouter>
    </div>
  );
}


export default App;
