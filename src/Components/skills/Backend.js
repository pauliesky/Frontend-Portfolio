import React from 'react'

const Backend = () => {
  return (
    <div className='skills__content'  >
      <h3 className='skills__title' > Backend Developer</h3>

      <div className='skills__box' >
        <div className='skills__group'  >
          <div className='skills__data'>
            <i class='bx bx-badge-check' ></i>

            <div>
              <h3 className='skills__name' >php </h3>
              <span className='skills__level' > basic</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check' ></i>

            <div>
              <h3 className='skills__name' > node js</h3>
              <span className='skills__level' > ntermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check' ></i>

            <div>
              <h3 className='skills__name' >python </h3>
              <span className='skills__level' >Intermediate</span>
            </div>
          </div>

        </div>
        <div className='skills__group'  >
          <div className='skills__data'>
            <i class='bx bx-badge-check' ></i>

            <div>
              <h3 className='skills__name' > mysql</h3>
              <span className='skills__level' >Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check' ></i>

            <div>
              <h3 className='skills__name' >fire base</h3>
              <span className='skills__level' >Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend