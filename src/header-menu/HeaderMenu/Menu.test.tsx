import { render, screen } from '@testing-library/react'
import Menu from './Menu'
import { MenuOptions } from './assets/menuOptions'

const mockOptions: MenuOptions = [
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

describe('Menu - Options', () => {
  test('should render options provided, with correct styles (display flex on <header> and <nav>)', () => {
    render(<Menu menuOptions={mockOptions} />)

    //renders the options
    expect(screen.queryByText(/Tesoros/i)).toBeInTheDocument()
    expect(screen.queryByText(/Opina/i)).toBeInTheDocument()
    expect(screen.queryByText(/Non existent option in the mock/i)).not.toBeInTheDocument()
  })
})
