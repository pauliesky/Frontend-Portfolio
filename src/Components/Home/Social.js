import React from 'react'

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.linkedin.com/in/paul-akinleye'
        className='home__social-icon'
        target='_blank'
        rel="linkedin noreferrer">
        <i class="uil uil-linkedin"></i>
      </a>
      <a href='https://github.com/pauliesky?tab=repositories' className='home__social-icon' target='_blank' rel="noreferrer" >
        <i class="uil uil-github"></i>
      </a>
      {/* <a href='www.github.com' className='home__social-icon' target='_blank' >
        <i class="uil uil-dribbble"></i>
      </a> */}

    </div>
  )
}

export default Social