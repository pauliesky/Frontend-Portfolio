import React from 'react'

const info = () => {
  return (
    <div className='about__info grid'>

      <div className='about__box'>
        <i class='bx bx-award about__icon'></i>
        <h3 className='about__title'>experience</h3>
        <span className='about__subtitle'>2 years working</span>
      </div>
      <div className='about__box'>
        <i class='bx bx-briefcase-alt about__icon' ></i>
        <h3 className='about__title'> completed</h3>
        <span className='about__subtitle'>3+ projects</span>
      </div>
      <div className='about__box'>
        <i class='bx bx-support about__icon' ></i>
        <h3 className='about__title'>support</h3>
        <span className='about__subtitle'>online 24/6</span>
      </div>

    </div>
  )
}

export default info
