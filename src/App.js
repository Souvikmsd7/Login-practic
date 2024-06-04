import './index.css'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import Signup from './pages/Signup'
import About from './pages/About'
import Product from './pages/Product'

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />}> */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path="*" element={<NoPage />} />

            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
