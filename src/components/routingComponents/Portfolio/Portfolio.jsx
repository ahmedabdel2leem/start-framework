import React, { useState } from 'react'
import Star from './../../Star/Star';
import { useOutletContext } from 'react-router-dom';
import img1 from '../../../assets/portfolio/poert1.png'
import img2 from '../../../assets/portfolio/port2.png'
import img3 from '../../../assets/portfolio/port3.png'
import './portfolio.css'
import Item from './Item/Item';


export default function Portfolio() {
  const imagesArray = [img1,img2,img3,img1,img2,img3]
  const portfolioClass = 'portfolio';
  const context = useOutletContext();
  const [modal,setModal]=useState(false);
  let [imgsrc,setImgsrc]=useState();

  const toggleModal = (val) =>{
    setModal(!modal);
    setImgsrc(val)
  }
  
  // function itemFocus(e){
  //   console.log(e.target)  
  // }
  return (
    <>
   <section id="portfolio"  className='pt-4 pb-5'> 
   <div  className="container text-white">
   <Star  myClass = {portfolioClass} linkName={context.link + ' COMPONENT'} />
    <div className="row g-5">
     {imagesArray.map((val,index)=>{
     return <Item toggle={toggleModal} val = {val} key={index}  />
     })}
    </div>
   </div>
 </section>
{modal &&(
  <div className="mymodal position-fixed w-100 top-0 d-flex justify-content-center align-items-center  h-100">
  <div onClick={toggleModal} className='w-100 h-100  position-fixed'></div>
<img src={imgsrc} className='w-50 position-absolute' alt="test" />
</div>
)}
      
    </>
  )
}
