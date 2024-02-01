import React from 'react';
import './about.css'
import Star from '../../Star/Star';
import { useOutletContext } from 'react-router-dom';

export default function About() {
  const context = useOutletContext();
  return (
    <>
 <section id="about" >
   
   <div className="container text-white">
   <Star linkName={context.link + ' COMPONENT'} />
     <div className="row px-5 g-4">
       <div className="col-md-6 ps-md-5">
         <p>
           Freelancer is a free bootstrap theme created by Route. The
           download includes the complete source files including HTML, CSS,
           and JavaScript as well as optional SASS stylesheets for easy
           customization.
         </p>
       </div>
       <div className="col-md-6 ps-md-5">
         <p>
           Freelancer is a free bootstrap theme created by Route. The
           download includes the complete source files including HTML, CSS,
           and JavaScript as well as optional SASS stylesheets for easy
           customization.
         </p>
       </div>
     </div>
   </div>
 </section>
    </>
  );
}
