


const ImageSlide = ({image}) => {
return(
   <>
      
         <div className="max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px]  overflow-y-auto overflow-x-hidden bg-[#1A0B2E] rounded-xl pt-5 pl-5 md:pt-10 md:pl-10">
            <img className="rounded-l-xl" src={image} alt="" />
         </div>
      
   </>
   )
}
import PropTypes from 'prop-types';
ImageSlide.propTypes = {
   image: PropTypes.string
}
export default ImageSlide;