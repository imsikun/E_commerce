import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

const Infoblock = ({ heading }) => {
  return (
    <section className='bg-theme my-5 py-4'>
      <div className='container'>
        <Heading title={heading} />
        <div className='row'>
          <div className='col-10 col-sm-8 mx-auto text-white text-center'>
            <p className='lead text-white mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              assumenda fugiat atque non beatae iure quaerat consequatur quo
              molestiae totam quod, impedit corporis reiciendis soluta magni
              odio, eveniet ipsam incidunt. Porro tempore illo quidem neque enim
              adipisci dicta qui hic similique optio et magnam, perferendis
              error iure, aut a? Maxime expedita necessitatibus sit, placeat
              quasi porro facere blanditiis molestias cupiditate.
            </p>
            <Link to='/about/'>
              <button className='btn btn-warning btn-lg'>{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infoblock
