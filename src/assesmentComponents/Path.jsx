import React from 'react'
import { Col, Row } from 'antd';


const Path = () => {
  return (
    <div className='Locations'>
        <div className='Locations_main mb-20'>

            <h1 className='font-family text-3xl font-bold text-black text-center my-14'> LOCATIONS </h1>

            <Row gutter={[20, 50]} className='px-10'>

                <Col className="gutter-row" span={8}>
                    <div className='bg-slate-500 rounded-3xl py-16 px-14'>
                        <h1 className='font-family text-2xl font-bold text-white'> SALT LAKE CITY, UTAH </h1>
                        <div className='border border-t-0 border-r-0 border-b-1 border-l-0 w-8 mt-2'></div>
                        <p className='font-family text-lg text-white w-72 py-5'> 2250 S Redwood Rd. STE 1, West Valley, UT 84119 </p>
                        <h1 className='font-family text-2xl font-bold text-white pb-5'> (801) 973-6755 </h1>
                        <button className='font-family font-medium bg-white py-2 px-7 rounded-lg text-black hover:bg-orange-600 hover:text-white transition duration-500 shadow-black shadow-sm'> Availalble Jobs </button>
                    </div>
                </Col>

                <Col className="gutter-row" span={8}>
                    <div className='bg-slate-500 rounded-3xl py-16 px-14'>
                        <h1 className='font-family text-2xl font-bold text-white'> UTAH COUNTY NORTH </h1>
                        <div className='border border-t-0 border-r-0 border-b-1 border-l-0 w-8 mt-2'></div>
                        <p className='font-family text-lg text-white w-72 py-5'> 363 N. University Ave, Suite 101., Provo, UT 84601 </p>
                        <h1 className='font-family text-2xl font-bold text-white pb-5'> (801) 900-4726 </h1>
                        <button className='font-family font-medium bg-white py-2 px-7 rounded-lg text-black hover:bg-orange-600 hover:text-white transition duration-500 shadow-black shadow-sm'> Availalble Jobs </button>
                    </div>
                </Col>

                <Col className="gutter-row" span={8}>
                    <div className='bg-slate-500 rounded-3xl py-16 px-14'>
                        <h1 className='font-family text-2xl font-bold text-white'> DAVIS/WEBER COUNTY </h1>
                        <div className='border border-t-0 border-r-0 border-b-1 border-l-0 w-8 mt-2'></div>
                        <p className='font-family text-lg text-white w-72 py-5'> 1952 West 5600 South, Suite 4, Roy, Utah 84067 </p>
                        <h1 className='font-family text-2xl font-bold text-white pb-5'> (801) 399-4473 </h1>
                        <button className='font-family font-medium bg-white py-2 px-7 rounded-lg text-black hover:bg-orange-600 hover:text-white transition duration-500 shadow-black shadow-sm'> Availalble Jobs </button>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Path
