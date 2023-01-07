import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/about" element={<About></About>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/register" element={<Register></Register>}></Route>
      </Routes>
    
    </div>
  )
}

export default App
