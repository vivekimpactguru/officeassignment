import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
  return (
    <div className='Footer bg-slate-800'>
        <div className='Footer_main bg-slate-800 flex px-16 pt-16 pb-20'>
        
            <div>
                <div>
                    <img src="https://jobs.lgresources.com/hubfs/files_2023/logo-bottom.svg" alt="" />
                </div>
                <div className='bg-orange-600'>
                    <div className='bg-yellow-400 font-bold text-2xl w-10 h-10'>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{color: "#FFF", fontSize:"rem"}}/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className='flex flex-col ml-28'>
                <h1 className='font-family text-lg font-semibold text-white'> SALT LAKE </h1>
                <div className='border border-t-0 border-r-0 border-b-1 border-l-0 w-6 mt-1'></div>
                <p className='font-family text-sm font-normal text-white py-8'> 2250 S Redwood Rd. Ste 1 <br /> West Valley, UT 84119 <br /> 801-973-6755 </p>
                <h1 className='font-family text-lg font-semibold text-white'> ROY OFFICE </h1>
                <div className='border border-t-0 border-r-0 border-b-1 border-l-0 w-6 mt-1'></div>
                <p className='font-family text-sm font-normal text-white pt-8'> 1952 W. 5600 S. Ste. 4 <br /> Roy Utah 84067 <br /> 801-399-4473 </p>
            </div>

            <div className='ml-52'>
                <h1 className='font-family text-lg font-semibold text-white'> PROVO OFFICE </h1>
                <div className='border border-t-0 border-r-0 border-b-1 border-l-0 w-6 mt-1'></div>
                <p className='font-family text-sm font-normal text-white pt-8'> 363 N. University Ave, Suite 101 <br /> Provo, Utah 84601 <br /> 801-900-4726 </p>
            </div>

            <div className='ml-28'>
                <p className='font-family text-sm font-normal text-white'> <a href=""> About Us </a> </p>
                <p className='font-family text-sm font-normal text-white py-8'> <a href=""> LG Gives Back </a> </p>
                <p className='font-family text-sm font-normal text-white '> <a href=""> Privacy Policy </a> </p>
                <p className='font-family text-sm font-normal text-white pt-8'> <a href=""> Contact Us </a> </p>
            </div>


        </div>
        <div className='border-gray-500 border border-t-5 border-r-0 border-b-0 border-l-0 mx-20'></div>
        <p className='font-family text-sm font-normal text-white text-center py-10'> © Copyright 2023 | Logistics Giving Resources, All Rights Reserved. | Utah Jobs | Utah Staffing | Utah Employment </p>
    </div>
  )
}

export default Footer
