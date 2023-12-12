import Title from "../Utilities/Title";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import bgGradient from '../../assets/image/BgGradient.svg'
const About = () => {

    return (
        <div id="about" className="my-10">
            <Title>About Me</Title>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 ">
                <div style={{ backgroundImage: `url(${bgGradient})` }} className="md:col-span-2 flex flex-col bg-center bg-no-repeat bg-cover ">
                    <p className="text-gray-300 flex-1 text-justify mb-5">
                        {`I am Md. Sohag, a dedicated and enthusiastic React front-end developer with knowledge of full-stack development. With a keen eye for detail and six months of dedicated learning, I've immersed myself in the world of web development, specializing in React.js for front-end development. I also possess knowledge of Express.js for server-side development and MongoDB for working with databases. This allows me to tackle end-to-end development tasks and build robust, scalable web applications.`}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center sm:gap-10 mb-5">
                        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9]  via-30% to-[#e38cff] to-80%">
                            <span className="flex items-center gap-2 font-bold mb-2"><MdEmail color="#e38cff" size={25}/> Email:</span>
                            <p className="text-[#e38cff] ">ohidursohag@gmail.com</p>
                        </div>
                        <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9]  via-30% to-[#e38cff] to-80%">
                            <span className="flex items-center gap-2 font-bold mb-2"><FaPhoneSquareAlt color="#e38cff" size={25}/> Phone Number:</span>
                            <p className="text-[#e38cff]">+880 1831-987636</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1A0B2E] col-span-1 p-5 ">
                    <div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80%">Education</h3>
                        <ul className="text-gray-400">
                            <li>S.S.C(Science) - 2012</li>
                            <li>H.S.C(Science) - 2016</li>
                        </ul>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80% mt-5">Contact Details</h3>
                        <div className="flex flex-col text-gray-400">
                            <span>Md. Sohag</span>
                            <span>House: Molla Bari, Holding No: 242,</span>
                            <span>Village: Hingula, Post Office: Konkapoit-3583,</span>
                            <span>Sub-District: Chaddagram, District: Cumilla,</span>
                            <span>Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;