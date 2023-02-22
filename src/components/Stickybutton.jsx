import React from 'react'
import { IoBulbOutline } from "react-icons/io5";
import { TfiAlarmClock } from "react-icons/tfi";
import {  BsCartCheck  } from "react-icons/bs";
import '../components/footer/footer.css'
const Stickybutton = () => {
  return (
    <div className="hideforpc" fluid>
    <div className="row  b-0">
      <div className=" " >
        <div
          className="floatingbutton   d-flex gap-0  btn-group"
          role="group"
        >
          <button type="button" class="btn     " >
            <i >
              <IoBulbOutline style={{fontSize:"24"}}/>
            </i>
            <p style={{fontSize:"12"}}>Saver Zone</p>
          </button>
          <button
            type="button"
            class="btn   "
            href="#"
          
          >
            <TfiAlarmClock   style={{fontSize:"24"}}/>
            <p style={{fontSize:"12"}}>Deal Of The Day</p>
          </button>
          <button type="button" class="btn    " >
            <BsCartCheck style={{fontSize:"24"}}/>
            <p style={{fontSize:"14"}}>Cart</p>
          </button>

         
        </div>
      </div>
    </div>
  </div>    
  )
}

export default Stickybutton