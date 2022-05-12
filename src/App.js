import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import HomePage2 from './components2/HomePage2';
import OrderHomePage from './ordercomponents/OrderHomePage';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/art'> Art </Link>
        <Link to='/customer'> Customer </Link>
        <Link to='/order'> Order </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Header />} />        
        <Route path='/art' element={<HomePage />} />
        <Route path='/customer' element={<HomePage2 />} />
        <Route path='/order' element={<OrderHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
