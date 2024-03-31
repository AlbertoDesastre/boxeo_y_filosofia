export type MenuOption = {
  main: { title: string; redirection: string }
  dropdown: Array<{ option: string; redirection: string }>
}

export type MenuOptions = Array<MenuOption>

export const menuOptions: MenuOptions = [
  {
    main: { title: '¿Qué es esto?', redirection: '/origen' },
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
    main: { title: 'Más información', redirection: '/mas-info' },
    dropdown: [
      {
        option: 'Quién soy',
        redirection: '/quien-soy',
      },
      { option: 'Mis tesoros', redirection: '/mis-tesoros' },
    ],
  },
  {
    main: { title: 'Bibliografía', redirection: '/bibliografia' },
    dropdown: [],
  },
  {
    main: { title: 'Opina tú', redirection: '/registro' },
    dropdown: [],
  },
]
