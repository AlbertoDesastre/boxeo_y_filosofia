import { DropdownState } from '../HeaderMenu'

export function useDropdown() {
  const updateActiveDropdown = ({
    dropdowns,
    thisDropdown,
  }: {
    dropdowns: DropdownState
    thisDropdown: string
  }) => {
    const newDropdowns: DropdownState = {}

    // resets all dropdowns to false
    Object.keys(dropdowns).forEach((key) => {
      newDropdowns[key] = false
    })

    //only the active dropdown gets it's value changed
    newDropdowns[thisDropdown] = !newDropdowns[thisDropdown]

    return newDropdowns
  }

  return { updateActiveDropdown }
}
