import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Details from './components/Details';
function App() {
  return (
    <Router>
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/restaurant/:id' element={<Details></Details>}></Route>
     </Routes>

    </Router>
  );
}

export default App;
