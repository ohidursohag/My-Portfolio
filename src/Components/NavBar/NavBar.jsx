import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import Hamburger from 'hamburger-react'
import { motion } from "framer-motion"
const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const refWraper = useRef(null)
   const handleClickOutSide = (event) => {
      if (refWraper.current && !refWraper.current.contains(event.target)) {
         setIsOpen(false);
      }
   }
   useEffect(() => {
      document.addEventListener('click', handleClickOutSide, true);
      return () => {
         document.removeEventListener('click', handleClickOutSide, true);
      };
   }, [])

   return (
      <div className="bg-[#1A0B2E] text-white  w-full py-5">
         <div className="container mx-auto px-2">
            <div className="relative">
               <div className=" hidden sm:flex gap-10 justify-center items-center">
                  <NavLinks setIsOpen={setIsOpen}></NavLinks>
               </div>
               <div ref={refWraper} className="flex justify-end sm:hidden">
                  <Hamburger  rounded toggled={isOpen} toggle={setIsOpen} />

                  <div >
                  {
                        isOpen
                        && <motion.div
                              initial={{ opacity: 0, x: 100 }}
                              animate={{ opacity: 1, x:0 }}
                              transition={{ duration: 0.5 }}
                           className=" bg-[#1A0B2E] absolute  py-10 -right-2 top-10 flex flex-col gap-3 px-5 sm:hidden rounded-lg">
                        <NavLinks setIsOpen={setIsOpen}/>
                        </motion.div>
                  }
               </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default NavBar;