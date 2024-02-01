import React from 'react'
import Star from '../../Star/Star';
import { useOutletContext } from 'react-router-dom';
import avataaars from '../../../assets/avataaars.svg'
import './hero.css'

export default function Hero() {
  const context = useOutletContext();  
  return (
    <>
   <section id="hero" >
   
   <div className="container text-white">
  
     <div className='text-center'>
      <img src={avataaars} alt="hero avatar" className='w-25' />
     <Star linkName={context.link } />
     <div>Graphic Artist - Web Designer - Illustrator</div>
     </div>
   </div>
 </section>
    </>
  )
}
