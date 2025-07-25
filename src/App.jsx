import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import AboutSvgoi from "./pages/About/About-Svgoi"
import AboutSviet from "./pages/About/About-Sviet"
import VisonAndMission from "./pages/About/Vison-Mission"
import BoardsOfManagement from "./pages/About/BoardsOfManagement"
import GoverningCouncil from "./pages/About/GoverningCouncil"
import FinanceCommittee from "./pages/About/FinanceCommittee"
import FromTheDeskOfMangmnt from "./pages/About/FromTheDeskOfMangmnt"
import AwardsAndRecog from "./pages/About/AwardsAndRecog"
import ComputerScienceEngineering from "./pages/Programs/Ug/ComputerScienceEngineering"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-svgoi" element={<AboutSvgoi />} />
          <Route path="/about-sviet" element={<AboutSviet />} />
          <Route path="/vision-mission" element={<VisonAndMission />} />
          <Route path="/board-of-management" element={<BoardsOfManagement />} />
          <Route path="/governing-council-2" element={<GoverningCouncil />} />
          <Route path="/finance-committee-2" element={<FinanceCommittee />} />
          <Route path="/from-the-management" element={<FromTheDeskOfMangmnt />} />
          <Route path="/awards-and-recognitions" element={<AwardsAndRecog />} />
          <Route path="/computer-science-engineering" element={<ComputerScienceEngineering />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App