import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/home/home';
import Work from '../src/components/work/work';
import Header from '../src/components/header/header';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route
            exact path="/"
            element={
              <>
                <Header /> <Home /> <Work />
              </>
            }
          />
    <Route exact path="home" element={<Home />}> </Route>
    <Route exact path="work" element={<Work />}> </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
