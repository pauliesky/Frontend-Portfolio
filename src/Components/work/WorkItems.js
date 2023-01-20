import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt='work' className='work__img' />
      <h3 className='work__title' >{item.title}</h3>
      <p className='work__about'>{item.about}</p>
      <p className='work__stack' >Stack: {item.stack}</p>
      <p className='work__role' >Role:{item.role}</p>
      <a href={item.site} target='_blank' className='work__button' rel="noreferrer">
        Live Project <i className='bx bx-right-arrow-alt work__button-icon ' ></i>
      </a>
    </div>
  )
}

export default WorkItems