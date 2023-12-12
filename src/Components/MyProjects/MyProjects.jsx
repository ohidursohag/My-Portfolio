import Title from "../Utilities/Title";
import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";

const MyProjects = () => {
return(
   <div className="py-16" id="projects">
        <Title>My Projects</Title>
        <div className="space-y-10">
            <Project01 />
            <Project02 />
            <Project03/>
        </div>
        
   </div>
)}
export default MyProjects;