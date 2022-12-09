import React from 'react'
import { TiTick } from "react-icons/ti";
function Secondscreen() {
  return (
    <div className='container p-10'>

    <div className="up">
    Add Candidates to Database
    </div>

    <div className="down mt-16 outline-dotted border border-white ">

    <div className="top text-2xl text-green-600 font-bold flex mt-10 justify-center">
    Thank You!
    </div>

    <div className="bottom flex justify-center mt-5 ">

    <div className="tick text-2xl text-green-600">
    <TiTick/>
    </div>

    <div className="write font-medium text-gray-600">
     File Succesfully Uploaded.

    </div>

    </div >
    <div className="write2 font-medium flex justify-center mt-5 mb-16 text-gray-600">
    Your records will be processed shortly.

    </div>
    </div>
    </div>
  )
}

export default Secondscreen