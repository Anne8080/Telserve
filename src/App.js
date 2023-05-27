import React from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";
import Help from "./pages/help/Help";
import Subscribe from "./pages/subscribe/Subscribe";
import Services from "./pages/services/Services";
import Package from "./pages/package/Package";
import Successful from "./pages/successful/Successful";
import "./scss/main.scss"
import "./scss/mods.scss"
import "bootstrap/dist/js/bootstrap"
import About from "./pages/about/About";
import ServicesNew from "./pages/Services_New/Services"

import "aos/dist/aos.css"
import aos from "aos"
import Lagos from "./pages/places/lagos";
import Abuja from "./pages/places/abuja";
function App() {
  
  aos.init()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
          </Route>
          <Route path="/location">
            <Route index element={<Location />}/>
          </Route>
          <Route path="/help">
            <Route index element={<Help />}/>
          </Route>
          <Route path="/subscribe/:id">
            <Route index element={<Subscribe />}/>
          </Route>
          <Route path="/services">
            <Route index element={<Services />}/>
          </Route>
          <Route path="/services-new">
            <Route index element={<ServicesNew />}/>
          </Route>
          <Route path="/package">
            <Route index element={<Package />}/>
          </Route>
          <Route path="/successful">
            <Route index element={<Successful />}/>
          </Route>
          <Route path="/about">
            <Route index element={<About />}/>
          </Route>
          <Route path="/lagos-plans">
            <Route index element={<Lagos />}/>
          </Route>
          <Route path="/abuja-plans">
            <Route index element={<Abuja />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
