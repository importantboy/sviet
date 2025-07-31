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
import Iqac from "./pages/NAAC/Iqac"
import BestPractices from "./pages/NAAC/BestPractices"
import Books from "./pages/Research/Books"
import ResearchProject from "./pages/Research/ResearchProject"
import Nss from "./pages/Outreach/Nss"
import NotFound from "./pages/NotFound"
import Placements from "./pages/Placements"
import EarnWhileLearn from "./pages/Research/EarnWhileLearn"
import Ncc from "./pages/Outreach/Ncc"
import Activity from "./pages/Outreach/Activites"
import SvietInMedia from "./pages/TopNav/SvietInMedia"
import Gallery from "./pages/TopNav/Gallery"
import International from "./pages/International"
import StudentFeedbackForm from "./pages/Feedback/StudentForm"
import AlumaniFeedback from "./pages/Feedback/AlumaniFeedback"
import FacultyFeedback from "./pages/Feedback/FacultyFeedback"
import EmployeeFeedback from "./pages/Feedback/EmployeeFeedback"
import ExamComittee from "./pages/ExamComittee"
import Rti from "./pages/FooterPages/Rti"
import ScSt from "./pages/FooterPages/ScSt"
import Grivence from "./pages/FooterPages/Grivence"
import WomenCell from "./pages/FooterPages/WomenCell"
import AntiRagging from "./pages/FooterPages/AntiRagging"
import ObcCell from "./pages/FooterPages/ObcCell"
import InternalComplaintCell from "./pages/FooterPages/InternalComplaintCell"
import Publication from "./pages/Research/Publication"

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
          <Route path="/iqac" element={<Iqac />} />
          <Route path="/best-practices-distinctiveness" element={<BestPractices />} />
          <Route path="/books" element={<Books />} />
          <Route path="/research-projects" element={<ResearchProject />} />
          <Route path="/nss" element={<Nss />} />
          <Route path="/ncc" element={<Ncc />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/international-students" element={<International />} />
          <Route path="/student-feedback" element={<StudentFeedbackForm />} />
          <Route path="/alumini-feedback-form" element={<AlumaniFeedback />} />
          <Route path="/faculty-feedback" element={<FacultyFeedback />} />
          <Route path="/employer-feedback-form" element={<EmployeeFeedback />} />
          <Route path="/exam-committee" element={<ExamComittee />} />
          <Route path="/rti" element={<Rti />} />
          <Route path="/womens-cell" element={<WomenCell />} />
          <Route path="/obc-cell-2" element={<ObcCell />} />
          <Route path="/internal-complaint-cell" element={<InternalComplaintCell />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/anti-ragging-policy" element={<AntiRagging />} />
          <Route path="/sc-st-committee" element={<ScSt />} />
          <Route path="/grievance-redressal-committee" element={<Grivence />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/earn-while-learn" element={<EarnWhileLearn />} />
          <Route path="/media" element={<SvietInMedia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App