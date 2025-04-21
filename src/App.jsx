import './App.css';
import Navbar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Slider from "./components/Slider";
import CollegeFinder from "./components/CollegeFinder";
import CollegeFinder_Info from "./components/CollegeFinder_Info";
import SchoolFinder from "./components/SchoolFinder";
import SchoolFinder_Info from "./components/SchoolFinder_Info";
import Sci_College_list from "./components/Sci_College_list"; 

// Category Components
import CategoryList from "./category/CategoryList";
import CategoryDetails from "./category/CategoryDetails";
import ItemDetail from "./category/ItemDetail";
import FestivalCards from "./category/FestivalCards";
import FestivalDetails from "./category/FestivalDetails";



import EventDetails from './components/EventDetails';
import RandomFactDetails from './components/RandomFactDetails';

import EventRegistration from './components/EventRegistration';


function App() {
  return (
    <div className='bg-amber-50'>
      <Router>
        <Navbar />
        <Slider />
        <FestivalCards></FestivalCards>
        <CollegeFinder></CollegeFinder>


        <Routes>
          {/* Home Page */}
          <Route path="/" element={<CategoryList />} />

          {/* College Routes */}
          <Route path="/college-finder" element={<CollegeFinder />} />
          <Route path="/college-info" element={<CollegeFinder_Info />} />
          <Route path="/school-finder" element={<SchoolFinder />} />
          <Route path="/school-info" element={<SchoolFinder_Info />} />
          <Route path="/science-colleges" element={<Sci_College_list />} /> 
          <Route path="/EventDetails" element={<EventDetails />} />
          <Route path="/EventRegistration" element={<EventRegistration />} />
          <Route path="/RandomFacts" element={<RandomFactDetails />} />


          {/* Category & Festival Routes */}
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/category/:categoryName" element={<CategoryDetails />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/festivals" element={<FestivalCards />} />
          <Route path="/festival/:festivalName" element={<FestivalDetails />} />

          {/* 404 Page */}
          <Route path="*" element={<h1 className="text-center text-red-500 text-2xl">Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
