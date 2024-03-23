import { MenuOption } from '../assets/menuOptions'
import  "./Option.css";

function Option({options, setToggle, toggle, children}: {options:MenuOption, setToggle:React.Dispatch<React.SetStateAction<boolean>>, toggle:boolean, children:React.ReactNode}) {

  return (
    <section  className='flex flex-col text-gray-400 gap-3'>
      {/* These are styles defined in the CSS of this component. Be aware to work on <a> not loading whole page */}
      {/* <h2 className={ options.main.title === "Home" ? 'highlited-option' : 'default-option'  }> <a href={options.main.redirection}>{options.main.title}</a></h2> */}
    
        <h2 className={ options.main.title === "Home" ? 'highlited-option' : 'default-option'  }> 
          <p  onClick={()=>{ setToggle(!toggle) }}>{options.main.title}</p>
        </h2>

        {children}
    </section>
  )
}

export default Option