import skills from '../../assets/image/skills.png'
import Title from '../Utilities/Title';

const MySkills = () => {
   return (
      <div id="mySkills" className='my-[100px] px-5 sm:px-10'>
         <Title>My Skills</Title>
         <figure className='max-w-[1200px] mx-auto'>
            <img src={skills} alt="" />
         </figure>
      </div>
   )
}
export default MySkills;