import { Menu } from './assets/menuOptions'
import logo from "../../imgs/boxeo_y_filosofia_shortened.png"
import Option from './Option/Option'
import Dropdown from './Dropdown/Dropdown'
import { useState } from 'react'

function HeaderMenu({menuOptions}: {menuOptions:Menu}) {
  const [toggle, setToggle] = useState(false);
  
  return (
    <header className='flex' style={{backgroundColor:"#fff8e7"}} >
      <img className='w-36' src={logo}/>
      <nav className='flex items-end '>
        {menuOptions.map((options => {
          // every option renders it's own component. If that option has a select, it means it needs a dropdown menu
        return <Option key={options.main.title} options={options} setToggle={setToggle} toggle={toggle}> 
          {<Dropdown dropdown={options.dropdown} toggle={toggle} />}
        </Option>
        }))}
      </nav>
    </header>
  )
}

export default HeaderMenu