import ScrollToTop from './ScrollToTop';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Registration from './Components/Registration/Registration';
import Applicants from './Components/Applicants/Applicants';
import Details from './Components/Applicants/Details';
import Success from './Components/Feedback/Success';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/applicants' element={<Applicants />} />
        <Route path='/success' element={<Success />} />
        <Route path='/regdetails/:id' element={<Details />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
