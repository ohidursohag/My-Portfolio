

const Title = ({children}) => {
return(
   <div className=''>
      <h1 className='text-4xl sm:text-5xl lg:text-6xl bg-clip-text leading-normal sm:leading-[60px] lg:leading-[75px] text-transparent bg-gradient-to-r from-[#cdacf9] via-[#6b2fb9] via-30% to-[#e38cff] to-80%" font-bold my-5'>{children}</h1>
   </div>
   )
}
import PropTypes from 'prop-types';
Title.propTypes = {
   children: PropTypes.string
}
export default Title;