
import { BrowserRouter } from "react-router-dom";
import MyProjects from "./Components/MyProjects/MyProjects";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToHashElement from "./Components/Utilities/ScrollToHashElement ";
import Headroom from "react-headroom";


const App = () => {
return(
   <div className="min-h-screen bg-[#11071F] text-white">
      <BrowserRouter>
         <ScrollToHashElement/>
         <Headroom>
            <NavBar />
         </Headroom>
         <Home />
         <About />
         <MyProjects />
      </BrowserRouter>
   </div>
)}
export default App;