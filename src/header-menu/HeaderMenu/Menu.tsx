import { MenuOptions } from './assets/menuOptions'
import logo from '../../imgs/boxeo_y_filosofia_shortened.png'
import Dropdown from './Dropdown/Dropdown'
import { useState } from 'react'

export type DropdownState = { [key: string]: boolean }

const setInitialDropdownState = (menuOptions: MenuOptions): DropdownState => {
  const state: DropdownState = {}

  for (let index = 0; index < menuOptions.length; index++) {
    state[menuOptions[index].main.title] = false
  }

  return state
}

function Menu({ menuOptions }: { menuOptions: MenuOptions }) {
  const [dropdowns, setDropdowns] = useState<DropdownState>(
    setInitialDropdownState(menuOptions),
  )

  return (
    <header className='flex' style={{ backgroundColor: '#fff8e7' }}>
      <img className='w-36' src={logo} />
      <nav className='flex items-end gap-4'>
        {menuOptions.map((options) => {
          // every option renders it's own component. If that option has a select, it means it needs a dropdown menu
          return (
            <Dropdown
              key={options.main.title}
              title={options.main.title}
              dropdown={options.dropdown}
              setDropdowns={setDropdowns}
              dropdowns={dropdowns}
            />
          )
        })}
      </nav>
    </header>
  )
}

export default Menu
