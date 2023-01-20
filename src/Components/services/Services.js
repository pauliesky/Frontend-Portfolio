import React, { useState } from 'react'
import './services.css'

const Services = () => {

  const [toggleState, setToggleState] = useState(0)


  const toggleTab = (index) => {
    setToggleState(index)
  }



  return (
    <section className='services section' id='services' >
      <h2 className='section__title' >Services</h2>
      <span className='section__subtitle'> What I offer </span>

      <div className='services__container container grid' >
        <div className='services__content' >
          <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>  Design </h3>
          </div>
          <span className='services__button' onClick={() => toggleTab(1)} >View More
            <i className='uil uil-arrow-right services__button-icon' ></i>
          </span>
          <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'} >
            <div className='services__modal-content' >
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close' ></i>

              {/* <h3 className='services__modal-title' >Product Designer </h3>*/}
              {/* <p className='services__modal-description'> While I am not a natural designer, I strongly believe design is as important as functionality in web applicaions</p> */}

              <ul className='services__modal-services grid' >
                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    User interface</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Pixel Perfection</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    UX element interactions</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Dynamic</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Mobile friendly</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className='services__content' >
          <div>
            <i className='uil uil-arrow services__icon'></i>
            <h3 className='services__title'>Functionality </h3>
          </div>
          <span className='services__button' onClick={() => toggleTab(2)} >View More <i className='uil uil-arrow-right services__button-icon' ></i></span>


          <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'} >
            <div className='services__modal-content' >

              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close' ></i>

              {/* <h3 className='services__modal-title' >UI/Ux DEsigner </h3>
              <p className='services__modal-description'> Services with more than 3 uears of experiencejj. Providing qiality wotk to clients and companies</p> */}

              <ul className='services__modal-services grid' >
                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Paying attention to details</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Speed </p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Eficient Web</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Easy to navigate</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Consistent Layout</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className='services__content' >
          <div>
            <i className='uil uil-edit services__icon'></i>
            <h3 className='services__title'> Skills  </h3>
          </div>
          <span className='services__button' onClick={() => toggleTab(3)} >View More <i className='uil uil-arrow-right services__button-icon' ></i></span>


          <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'} >
            <div className='services__modal-content' >

              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close' >  </i>

              {/* <h3 className='services__modal-title' > Visual Designer</h3>
              <p className='services__modal-description'> Services with more than 3 uears of experience. Providing qiality wotk to clients and companies</p> */}

              <ul className='services__modal-services grid' >
                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Clean code</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Excellent Technical Skill</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Time Management</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Team Player</p>
                </li>

                <li className='services__modal-service' >
                  <i className='uil uil-check-circle services__modal-icon' ></i>
                  <p className='services__modal-info'>
                    Project Management Tool</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services




