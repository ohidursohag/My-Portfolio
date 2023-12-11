import bgimage from '../../assets/image/bannerBg.svg'
import profileImage from '../../assets/image/ProfileImage.png'
import { FiDownload } from "react-icons/fi";
const Home = () => {
    return (
        <div id="home" style={{ backgroundImage: `url(${bgimage})` }} className="  sm:min-h-[calc(100vh-68px)]  px-2 lg:px-10 bg-cover bg-no-repeat bg-center flex justify-center items-center">
            <div className='h-full container mx-auto flex flex-col-reverse lg:flex-row gap-10 items-center justify-between py-10 lg:py-0'>
                <div className=' '>
                    <div className=" font-bold ">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80%">Hi,I am</h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl bg-clip-text leading-normal sm:leading-[60px] lg:leading-[75px] text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80%">Md. Sohag</h1>
                    </div>
                    <hr className="border-[4px] rounded-full bg-clip-border max-w-[400px] border-[#230f3e]  my-3 sm:my-10" />
                    <div className=" font-bold ">
                        <h1 className="text-2xl sm:text-3xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80%">Front-End</h1>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl bg-clip-text leading-normal sm:leading-[60px] lg:leading-[75px] text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80%">Web Developer</h1>
                    </div>
                    <button className='flex items-center justify-center my-5 gap-5 px-5 py-3 sm:px-10 sm:py-4 rounded-lg [#6b2fb9]  bg-gradient-to-r from-[#6b2fb9]  to-[#e38cff]  hover:from-[#e38cff]  hover:to-[#6b2fb9]'><span className='text-lg font-bold'>Download Cv</span><span><FiDownload size={25}/></span></button>
                </div>
                <div>
                    <figure className='w-[300px] sm:w-[400px] xl:w-[500px] 2xl:w-[auto]  rounded-full border-[4px] object-cover object-center  border-[#230f3e] overflow-hidden'>
                        <img src={profileImage} alt="" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default Home;