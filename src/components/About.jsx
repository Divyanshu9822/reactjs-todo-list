import React from 'react'

const About = () => {
  return (
    <div className='container mt-3 px-5'>
        <h4 className='text-center'>About this project</h4>
        <ul className='mt-4 list-group'>
          <li className="list-group-item">Made Different components i.e. to add todo, to display todo, component to hold all todo items.</li>
          <li className="list-group-item">Used useContext hook to handle state change and to provide data to all the components.</li>
          <li className="list-group-item">Used browser local storage to prevent data loss (todo items) on page refresh or revisiting the project.</li>
          <li className="list-group-item">Todos can be edited too.</li>
          <li className="list-group-item">Stored data in JSON form and mapped through component.</li>
          <li className="list-group-item">React router is used to switch pages between Home & About.</li>
          <li className="list-group-item">CSS is done using bootstrap.</li>
        </ul>
    </div>
  )
}

export default About