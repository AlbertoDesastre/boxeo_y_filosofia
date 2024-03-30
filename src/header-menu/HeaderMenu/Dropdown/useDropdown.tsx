import { DropdownState } from '../HeaderMenu'

export function useDropdown() {
  const reset = (dropdowns: DropdownState) => {
    const resettedDropdowns: DropdownState = {}

    Object.keys(dropdowns).forEach((key) => {
      resettedDropdowns[key] = false
    })

    return resettedDropdowns
  }

  return { reset }
}
