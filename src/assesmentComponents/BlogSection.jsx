import React from 'react'
import { Card } from 'antd';
import { Col, Row } from 'antd';


const BlogSection = () => {
  return (
    <div className='Blog'>
      <div className='Blog_main bg-slate-200'>
        <h1 className='font-family text-3xl font-extrabold text-black text-center py-14'> From the Blog </h1>
        <Row gutter={[50, 20]} className='px-10'>
            <Col className="gutter-row" span={8}>
                <Card className='rounded-3xl'>
                    <div className=''>
                        <img className='rounded-3xl' src="https://19545538.fs1.hubspotusercontent-na1.net/hub/19545538/hubfs/professional-staffing-agencies-980x653.webp?width=390&height=230&name=professional-staffing-agencies-980x653.webp" alt="" />
                    </div>

                    <h1 className='font-family font-bold text-xl py-5'> What Does a Professional Staffing Agency Do For Job Seekers? </h1>

                    <p className='font-family text-sm font-medium pb-16'> Successful <a className='text-orange-600 hover:underline hover:text-orange-600 cursor-pointer' href="">  professional staffing agencies </a> can save both employees and employers time and money. Wherever you live, there are professional staffing agencies ready to help you find your... </p>

                    <button className='font-family font-medium bg-black py-2 px-7 rounded-lg text-white hover:bg-orange-600 hover:text-white transition duration-500 shadow-black shadow-sm'> Read More </button>
                </Card>
            </Col>

            <Col className="gutter-row" span={8}>
                <Card className='rounded-3xl'>
                    <div className=''>
                        <img className='rounded-3xl' src="https://19545538.fs1.hubspotusercontent-na1.net/hub/19545538/hubfs/Local-Staffing-Agency-1024x683-1-1024x675.webp?width=390&height=230&name=Local-Staffing-Agency-1024x683-1-1024x675.webp" alt="" />
                    </div>

                    <h1 className='font-family font-bold text-xl py-5'> Choosing the Right Local Staffing Agency to Find a Job </h1>

                    <p className='font-family text-sm font-medium pb-5'> Choosing the Right Staffing Agency as a Job Seeker </p>

                    <p className='font-family text-sm font-medium pb-6'> Working with a staffing agency is often a great way to find a job, especially during difficult economic conditions. However, not... </p>

                    <button className='font-family font-medium bg-black py-2 px-7 rounded-lg text-white hover:bg-orange-600 hover:text-white transition duration-500 shadow-black shadow-sm'> Read More </button>
                </Card>
            </Col>

            <Col className="gutter-row" span={8}>
                <Card className='rounded-3xl'>
                    <div className=''>
                        <img className='rounded-3xl w-96 h-56' src="https://19545538.fs1.hubspotusercontent-na1.net/hub/19545538/hubfs/staffing%20agency.jpg?width=390&height=230&name=staffing%20agency.jpg" alt="" />
                    </div>

                    <h1 className='font-family font-bold text-xl py-5'> Find Your Next Job Through LG Resources Staffing Agency </h1>

                    <p className='font-family text-sm font-medium pb-16'> Most of us need to work to pay the bills. Unfortunately, it’s not always easy to find work when you need it, especially if you’re looking for a specific type of job. </p>

                    <button className='font-family font-medium bg-black py-2 px-7 rounded-lg text-white hover:bg-orange-600 hover:text-white transition duration-500 shadow-black shadow-sm'> Read More </button>
                </Card>
            </Col>
        </Row>
        <div className='flex justify-center py-14'>
            <button className='font-family font-medium bg-transparent py-4 px-5 rounded-xl text-black border border-black hover:bg-orange-600 hover:text-white transition duration-700 shadow-black shadow-sm'><a href="https://jobs.lgresources.com/blog" target='_blank'>  View More Articles </a> </button>
            </div>
        
      </div>
    </div>
  )
}

export default BlogSection
