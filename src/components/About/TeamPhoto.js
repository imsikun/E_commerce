import React from 'react'

const TeamPhoto = () => {
  return (
    <div>
      <div className='card-group'>
        <div className='card'>
          <img
            src='https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>John Jacob</h5>
            <p className='card-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, ea
              neque cum eligendi nulla labore id culpa quos nemo distinctio?
            </p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className='card'>
          <img
            src='https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>Samantha</h5>
            <p className='card-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              hic repellat earum laboriosam nulla quae dicta ea non perferendis
              vitae!
            </p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className='card'>
          <img
            src='https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>Sam Curran</h5>
            <p className='card-text'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              sed pariatur officia rem, veritatis doloribus quae sapiente
              possimus dicta fuga!
            </p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPhoto
