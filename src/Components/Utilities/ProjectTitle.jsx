

const ProjectTitle = ({ children }) => {
return(
   <div className=''>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl bg-clip-text leading-normal sm:leading-[40px] lg:leading-[45px] text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80%" font-bold my-5'>{children}</h1>
   </div>
   )
}
import PropTypes from 'prop-types';
ProjectTitle.propTypes = {
   children: PropTypes.string
}
export default ProjectTitle;