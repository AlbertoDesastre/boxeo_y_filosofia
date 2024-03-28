import { DropdownState } from '../HeaderMenu'
import './Dropdown.css'

function Dropdown({
  title,
  dropdown,
  setShowDropdown,
  showDropdown,
}: {
  title: string
  dropdown: Array<{ option: string; redirection: string }>
  setShowDropdown: React.Dispatch<React.SetStateAction<DropdownState>>
  showDropdown: DropdownState
}) {
  return (
    <section className='flex flex-col text-gray-400 gap-3'>
      <h2>
        <p
          onClick={() => {
            // this beautiful piece of code means that the object will spread entirely, but only the dropdown owned
            // by the title will toggle it's value.
            setShowDropdown({ ...showDropdown, [title]: !showDropdown[title] })
          }}
        >
          {title}
        </p>
      </h2>

      {showDropdown && (
        <ul className='absolute mt-5' style={{ backgroundColor: '#fff8e7' }}>
          {dropdown.map((sltc) => (
            <li key={sltc.option} className={showDropdown[title] ? 'show-dropdown' : 'hide'}>
              <a href={sltc.redirection}>{sltc.option}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Dropdown
