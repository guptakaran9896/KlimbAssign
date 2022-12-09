import React, { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'


const Page = () => {
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleClick = () => {
    
      
    const formData = new FormData();

    formData.append('user_file', file);

    fetch('http://localhost:5000/neemtree', {
      method: 'POST',
      body: formData
    }).then((rsp) => rsp.json()).then((response) => navigate("/secondpage")).catch((err) => {
      console.log(err)
    })
  }


  console.log(file)


  return (
    <div className='container p-10 '>
      <div className="up">
        Add Candidates to Database
      </div>
      <div className="down mt-16 border  border-white outline-dotted">
        <div className="top cursor-pointer text-4xl flex mt-5 justify-center">
          <input className='text-sm opacity-0 w-8 h-10 cursor-pointer z-10 ' type="file" name="" id="" accept='.xlsx , .xls' onChange={(e) => setFile(e.target.files[0])} />
          <div className="filename w-52 absolute mt-10 text-sm">
          </div>
          <div className="icon  cursor-pointer z-100 absolute">
          <div className="ic text-center flex justify-center">
            <FaUpload />

          </div>
          <div className="filenameclass text-sm ">
            {file?.name}

          </div>
          </div>
        </div>
        {!file && <div id='writtenpart' className="bottom block text-center mt-8 mb-5">
          Upload a .xlsx or .xls file here
        </div>}
        <div id='btnparent' className="bt text-center">

          {file && <button id="form" onClick={handleClick} className="bg-green-600 mt-5 text-center hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"  >
            SUBMIT
          </button>}
        </div>
      </div>


    </div>
  )
}

export default Page