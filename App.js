
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homes from './component/pages/Homes';
import Contact from './component/pages/Contact';
import Abouts from './component/pages/Abouts';
import Navbar from './component/inc/Navbar';
import './App.css';
import Footer from './component/inc/Footer';
import Apply from './component/pages/Apply';
import Form from './component/pages/Form';





function App() {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Homes} />
        <Route path='/Contact' Component={Contact} />
        <Route path='/Abouts' Component={Abouts} />
        <Route path='/apply' Component={Apply} />
        <Route path='/form' Component={Form} />
      </Routes>
      
    </Router>


  );
}

export default App;
