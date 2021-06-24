import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

const Dualinfoblock = ({ heading }) => {
  return (
    <section className='my-4 py-4 bg-theme'>
      <div className='container'>
        <Heading title={heading} />
        <div className='row'>
          <div className='col-8 mx-auto'>
            <p className='lead text-white mb-5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              repudiandae cumque perspiciatis voluptatibus totam eos dignissimos
              aliquid veritatis, inventore debitis nam quaerat amet sunt vero
              vitae doloremque aperiam alias eaque blanditiis ut a dolore. Modi
              saepe enim ipsam, eius accusantium repellat. Placeat, nulla ullam
              consequatur officia fugit quaerat soluta eaque!
            </p>
          </div>
          <div className='col-4'>
            <div className='card'>
              <img
                src='https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h5 className='card-title'>Just Click Photos</h5>
                <p className='card-text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  et officiis quidem rem laboriosam nostrum quisquam, nobis
                  ipsum est. Cumque sit quod illum dolor nulla aliquam. Iusto
                  tenetur sint veritatis.
                </p>
                <Link className='btn btn-primary text-white'>Our Team</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dualinfoblock
