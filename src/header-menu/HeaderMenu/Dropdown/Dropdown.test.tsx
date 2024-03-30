import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeaderMenu from '../HeaderMenu'
import { Menu } from '../assets/menuOptions'

const mockOptions: Menu = [
  {
    main: { title: '¿Qué es esto?', redirection: '/about' },
    dropdown: [
      {
        option: 'Esto es',
        redirection: '/esto-es',
      },
      { option: 'Queso', redirection: '/queso' },
    ],
  },
  {
    main: { title: 'Artículos', redirection: '/articulos' },
    dropdown: [
      {
        option: 'Filosofía dentro del boxeo',
        redirection: '/filosofia-en-boxeo',
      },
      { option: 'Estoicismo', redirection: '/estoicismo' },
      { option: 'Reflexiones', redirection: '/reflexiones' },
      { option: 'Inclasificables', redirection: '/desastre' },
    ],
  },
  {
    main: { title: 'Tesoros', redirection: '/tesoros' },
    dropdown: [],
  },
  {
    main: { title: 'Opina tú', redirection: '/registro' },
    dropdown: [],
  },
]

// this is a direct recommendation of react-testing-library docs for making use of userEvents
// check the super interesting resources, first on https://kentcdodds.com/blog/avoid-nesting-when-youre-testing
// and https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent
function setup(component: JSX.Element) {
  return { user: userEvent.setup(), ...render(component) }
}

describe('Dropdown', () => {
  test('should render only the Dropdown owned by an option (one click = one dropdown)', async () => {
    // this {user} is equivalent to returning userEvent, to perform user interactions with the DOM
    const { user } = setup(<HeaderMenu menuOptions={mockOptions} />)
    const utils = {
      option: screen.queryByText(/Artículos/i),
      dropdown: screen.queryByText(/Reflexiones/i),
      unrelatedOption: screen.queryByText(/¿Qué es esto?/i),
      unrelatedDropdown: screen.queryByText(/Queso/i),
    }

    // if the user hasn't click on an option, "dropdown/s" shouldn't render
    expect(utils.option).toBeVisible()
    expect(utils.dropdown).not.toBeVisible()
    expect(utils.unrelatedOption).toBeVisible()
    expect(utils.unrelatedDropdown).not.toBeVisible()

    // if the user clicks on the option with a dropdown, it should render ONLY that dropdown
    await user.click(utils.option as Element)
    expect(utils.dropdown).toBeVisible()
    expect(utils.unrelatedDropdown).not.toBeVisible()
  })

  test('should show a Dropdown clicked and close all the rests', async () => {
    const { user } = setup(<HeaderMenu menuOptions={mockOptions} />)

    const utils = {
      option: screen.queryByText(/Artículos/i),
      dropdown: screen.queryByText(/Reflexiones/i),
      unrelatedOption: screen.queryByText(/¿Qué es esto?/i),
      unrelatedDropdown: screen.queryByText(/Queso/i),
    }

    // renders the first option
    await user.click(utils.option as Element)
    expect(utils.dropdown).toBeVisible()
    expect(utils.unrelatedDropdown).not.toBeVisible()

    //now they click on another option, closing the rest of dropdown except this one
    await user.click(utils.unrelatedOption as Element)
    expect(utils.unrelatedDropdown).toBeVisible()
    expect(utils.dropdown).not.toBeVisible()
  })

  test('should close all Dropdowns when the title loses focus', async () => {})
})
