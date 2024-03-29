import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import Home from '../src/Routes/Home';
import Contact from '../src/Routes/Contact';
import DentistDetail from '../src/Routes/Detail'
import Favorites from '../src/Routes/Favs'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/home" element={<Home/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/dentist/:id" element={<DentistDetail/>} />
          <Route  path="/favs" element={<Favorites/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

