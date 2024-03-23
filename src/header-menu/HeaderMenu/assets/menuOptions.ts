export type MenuOption = {
  main: { title: string; redirection: string };
  select: Array<{ option: string; redirection: string }>;
};

export type Menu = Array<MenuOption>;

export const menuOptions: Menu = [
  {
    main: { title: "¿Qué es esto?", redirection: "/origen" },
    select: [
      {
        option: "Filosofía dentro del boxeo",
        redirection: "/filosofia-en-boxeo",
      },
      { option: "Estoicismo", redirection: "/estoicismo" },
      { option: "Reflexiones", redirection: "/reflexiones" },
      { option: "Inclasificables", redirection: "/desastre" },
    ],
  },
  {
    main: { title: "Más información", redirection: "/mas-info" },
    select: [
      {
        option: "Quién soy",
        redirection: "/quien-soy",
      },
      { option: "Mis tesoros", redirection: "/mis-tesoros" },
    ],
  },
  {
    main: { title: "Bibliografía", redirection: "/bibliografia" },
    select: [],
  },
  {
    main: { title: "Opina tú", redirection: "/registro" },
    select: [],
  },
];
