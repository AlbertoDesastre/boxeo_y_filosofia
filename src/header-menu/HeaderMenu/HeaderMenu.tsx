import { Menu } from './assets/menuOptions'
import logo from '../../imgs/boxeo_y_filosofia_shortened.png'
import Dropdown from './Dropdown/Dropdown'
import { useState } from 'react'

function HeaderMenu({ menuOptions }: { menuOptions: Menu }) {
  const [toggle, setToggle] = useState(false)

  return (
    <header className='flex' style={{ backgroundColor: '#fff8e7' }}>
      <img className='w-36' src={logo} />
      <nav className='flex items-end '>
        {menuOptions.map((options) => {
          // every option renders it's own component. If that option has a select, it means it needs a dropdown menu
          return (
            <Dropdown
              title={options.main.title}
              dropdown={options.dropdown}
              setToggle={setToggle}
              toggle={toggle}
            />
          )
        })}
      </nav>
    </header>
  )
}

export default HeaderMenu
