import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlus} from "@fortawesome/free-solid-svg-icons";
export default function Item({val,toggle}) {
    // console.log(val)
  return (
    <>
       <div className="col-md-4">
        <div onClick={()=>{
            toggle(val)
        }}  className="item  rounded-3 overflow-hidden position-relative" >
          <img src={val}  className='w-100' alt="" />
          <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100">
          <FontAwesomeIcon className='plus_icon' icon={faPlus} />
          </div>
        </div>
      </div>
    </>
  )
}
