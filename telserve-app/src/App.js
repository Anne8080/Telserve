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


function App() {
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
          <Route path="/subscribe">
            <Route index element={<Subscribe />}/>
          </Route>
          <Route path="/services">
            <Route index element={<Services />}/>
          </Route>
          <Route path="/package">
            <Route index element={<Package />}/>
          </Route>
          <Route path="/successful">
            <Route index element={<Successful />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
