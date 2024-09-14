import logo from './logo.svg';
import './App.css';
import './home/home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
        <Route exact path="/" element={<Home/>} />
        
        
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
