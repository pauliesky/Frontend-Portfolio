import React from 'react'
import './Qualifications.css'

const Qualifications = () => {
  return (
    <section className='qualification section' >
      <h2 className='section__title' > Qualifications</h2>
      <span className='section__subtitle'>My Personal Journey  </span>

      <div className='qualification__container container' >
        <div className='qualification__tabs'>
          <div className='qualification__button  qualification__active button--flex'>
            <i className='uil uil-graduation-cap qualification__icon'></i>Education
          </div>

          <div className='qualification__button button--flex'>
            <i className='uil uil-briefcase-alt qualification__icon'></i>Experience
          </div>
        </div>

        <div className='qualification__sections' >
          <div className='qualification__content' >
            <div className='qualification__data' >
              <div>
                <h3 className='qualification__title'> </h3>
                <span className='qualification__subtitle' >SPain- intitute</span>
                <div className='qualification__calender' >
                  <i className='uil uil-calendar-alt'></i>2021-present
                </div>
              </div>
              <div>
                <span className='qualification__rounder' >

                </span>

                <span className='qualification__line'></span>
              </div>

            </div>

            <div className='qualification__data' >
              <div></div>
              <div>
                <span className='qualification__rounder' ></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'> </h3>
                <span className='qualification__subtitle' >SPain- intitute</span>
                <div className='qualification__calender' >
                  <i className='uil uil-calendar-alt'></i>2021-present
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications