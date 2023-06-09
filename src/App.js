import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Registration from './components/Registration/Registration';
import Categories from './components/Categories/Categories';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productDetails/:productId" element={<ProductDetails/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/categories" element={<Categories/>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    
  );
}

export default App;
