import { BrowserRouter } from "react-router-dom"
import HomePage from "./pages/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (<>
    <BrowserRouter>
      <Navbar />
      <HomePage />
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App