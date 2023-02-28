import React from 'react'

const info = () => {
  return (
    <div className='about__info grid'>

      <div className='about__box'>
        <i class='bx bx-award about__icon'></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>3+ years</span>
      </div>
      <div className='about__box'>
        <i class='bx bx-briefcase-alt about__icon' ></i>
        <h3 className='about__title'> Completed</h3>
        <span className='about__subtitle'>3+ projects</span>
      </div>
      <div className='about__box'>
        <i class='bx bx-support about__icon' ></i>
        <h3 className='about__title'>Work</h3>
        <span className='about__subtitle'>Hybrid</span>
      </div>

    </div>
  )
}

export default info
