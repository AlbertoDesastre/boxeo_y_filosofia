import { DropdownState } from '../Menu'
import './Dropdown.css'
import { useDropdown } from './useDropdown'

function Dropdown({
  title,
  dropdown,
  setDropdowns,
  dropdowns,
}: {
  title: string
  dropdown: Array<{ option: string; redirection: string }>
  setDropdowns: React.Dispatch<React.SetStateAction<DropdownState>>
  dropdowns: DropdownState
}) {
  const { updateActiveDropdown } = useDropdown()

  return (
    <section className='flex flex-col text-gray-400 gap-3'>
      <h2>
        <p
          onClick={() => {
            // this beautiful piece of code means that the object will spread entirely, but only the dropdown owned
            // by the title will toggle it's value.
            setDropdowns({
              ...updateActiveDropdown({ dropdowns, thisDropdown: title }),
            })
          }}
        >
          {title}
        </p>
      </h2>

      {dropdowns && (
        <ul className='absolute mt-5' style={{ backgroundColor: '#fff8e7' }}>
          {dropdown.map((sltc) => (
            <li key={sltc.option} className={dropdowns[title] ? 'show-dropdown' : 'hide'}>
              <a href={sltc.redirection}>{sltc.option}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Dropdown
