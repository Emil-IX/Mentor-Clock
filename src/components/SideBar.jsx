import { NavLink } from 'react-router-dom'

export const SideBar = () => {
  return (
      
        <div className='sidebar  col'>

          <h1 className='title ms-4 '>Mentor Clock</h1>

            <div className='list_path  d-flex flex-column ms-5 '>
             
              <NavLink 
              className={ ({isActive}) => `nav_links nav-link ${ isActive ? 'activeLink' : ''}` } 
              to='/' >
              Clock
              </NavLink>

              <NavLink 
              className={ ({isActive}) => `nav_links nav-link ${ isActive ? 'activeLink' : ''}` } 
              to='/timer' >
              Coming soon...
              </NavLink>


            </div>

        </div>
      
  )

}

