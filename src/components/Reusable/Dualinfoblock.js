import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

const Dualinfoblock = ({ heading, imgSrc }) => {
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
              consequatur officia fugit quaerat soluta eaque! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ipsam, nostrum ad? Error,
              nostrum voluptate quaerat culpa atque officiis reiciendis
              consequuntur aperiam explicabo ipsum quam molestias numquam illo
              maxime corrupti vitae! Quasi exercitationem id quaerat quos minima
              magni velit nesciunt doloremque, beatae at? Ex nihil, dicta earum,
              ea at alias nesciunt amet quas aperiam laboriosam itaque! Corrupti
              dicta sequi, dolore obcaecati eos dignissimos illo nam quisquam
              porro quam delectus corporis sit eligendi? Natus sequi voluptates
              assumenda saepe quaerat maxime hic nihil eos. Veniam cum adipisci
              saepe quos vero. Quisquam, optio corrupti exercitationem
              repudiandae obcaecati quod minus pariatur dolore ex incidunt
              praesentium.
            </p>
          </div>
          <div className='col-4'>
            <div className='card bg-dark'>
              <img src={imgSrc} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title text-success'>Just Click Photos</h5>
                <p className='card-text text-white'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  et officiis quidem rem laboriosam nostrum quisquam, nobis
                  ipsum est. Cumque sit quod illum dolor nulla aliquam. Iusto
                  tenetur sint veritatis.
                </p>
                <Link className='btn btn-warning btn-block text-white'>
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dualinfoblock
