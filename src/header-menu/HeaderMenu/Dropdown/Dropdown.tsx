function Dropdown({
  title,
  dropdown,
  setToggle,
  toggle,
}: {
  title: string
  dropdown: Array<{ option: string; redirection: string }>
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
  toggle: boolean
}) {
  return (
    <section className='flex flex-col text-gray-400 gap-3'>
      <h2>
        <p
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          {title}
        </p>
      </h2>

      {toggle && (
        <ul>
          {dropdown.map((sltc) => (
            <li key={sltc.option} className={toggle ? 'show-dropdown' : 'hide'}>
              <a href={sltc.redirection}>{sltc.option}</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Dropdown
