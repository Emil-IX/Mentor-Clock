import { NavLink } from 'react-router-dom'

export const SideBar = () => {
  return (
      
        <div className='sidebar  col'>

          <h1 className='title ms-4 text-center '>Mentor Clock</h1>

            <div className='list_path  d-flex flex-column ms-5 '>
             <hr className='text-light'  />
              <NavLink 
              className={ ({isActive}) => `nav_links nav-link ${ isActive ? 'activeLink' : ''}` } 
              to='/' >
              Mentor Clock
              </NavLink>

              <NavLink 
              className={ ({isActive}) => `nav_links nav-link ${ isActive ? 'activeLink' : ''}` } 
              to='/timer' >
              Mentor Timer
              </NavLink>


            </div>

        </div>
      
  )

}

