import ThemeContext from './context/ThemeContext'
import './App.css';
import ProductSection from './components/ProductSection';



function App() {

  return (
    <ThemeContext>
      <ProductSection />
    </ThemeContext>
  );
}

export default App;
