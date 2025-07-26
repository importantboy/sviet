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
import CivilEngineering from "./pages/Programs/Ug/CivilEngineering"
import MechanicalEngineering from "./pages/Programs/Ug/MechanicalEngineering"
import ElectricalEngineering from "./pages/Programs/Ug/ElectricalEngineering"
import Ece from "./pages/Programs/Ug/Ece"
import Csd from "./pages/Programs/Ug/Csd"
import Mtech from "./pages/Programs/Pg/Mtech"
import MtechElec from "./pages/Programs/Pg/MtechElec"
import MtechMechanical from "./pages/Programs/Pg/MtechMachanical"
import Mca from "./pages/Programs/Pg/Mca"
import Mba from "./pages/Programs/Pg/Mba"
import MeDiploma from "./pages/Programs/Diploma/MechanicalEng"
import CivilEngineeringDiploma from "./pages/Programs/Diploma/CivilEngineering"
import Iqac from "./pages/NAAC/Iqac"
import BestPractices from "./pages/NAAC/BestPractices"

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
          <Route path="/civil-engineering" element={<CivilEngineering />} />
          <Route path="/mechanical-engineering" element={<MechanicalEngineering />} />
          <Route path="/electrical-engineering" element={<ElectricalEngineering />} />
          <Route path="/ece" element={<Ece />} />
          <Route path="/csd" element={<Csd />} />
          <Route path="/m-tech" element={<Mtech />} />
          <Route path="/m-tech-electronics" element={<MtechElec />} />
          <Route path="/mtech-me" element={<MtechMechanical />} />
          <Route path="/mca" element={<Mca />} />
          <Route path="/business-administration" element={<Mba />} />
          <Route path="/mechanical-engineering-diploma" element={<MeDiploma />} />
          <Route path="/civil-engineering-diploma" element={<CivilEngineeringDiploma />} />
          <Route path="/iqac" element={<Iqac />} />
          <Route path="/best-practices-distinctiveness" element={<BestPractices />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App