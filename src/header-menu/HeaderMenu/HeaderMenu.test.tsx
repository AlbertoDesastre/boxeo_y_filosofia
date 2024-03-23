
import { render, screen } from "@testing-library/react";
import HeaderMenu from "./HeaderMenu";
import { Menu } from "./assets/menuOptions";

describe("Header Menu",()=>{
    const mockOptions: Menu = [
      {
        main: { title: "¿Qué es esto?", redirection: "/about" },
        select: [],
      },
      {
        main: { title: "Artículos", redirection: "/articulos" },
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
        main: { title: "Tesoros", redirection: "/tesoros" },
        select: [],
      },
      {
        main: { title: "Sobre mí", redirection: "/sobre-mi" },
        select: [],
      },
      {
        main: { title: "Opina tú", redirection: "/registro" },
        select: [],
      },
    ];

  test('should render options provided, with correct styles (display flex on <header> and <nav>)',()=>{
     render(<HeaderMenu menuOptions={mockOptions} />)

     //renders the options
     expect(screen.queryByText(/Tesoros/i)).toBeInTheDocument();
     expect(screen.queryByText(/Opina/i)).toBeInTheDocument();
     expect(screen.queryByText(/Non existent option in the mock/i)).not.toBeInTheDocument(); 
     
     // has the proper styles
   })


  test('should render the Dropwdown of an option if it has any',()=>{
     render(<HeaderMenu menuOptions={mockOptions} />)

  })

  test('shouldnt render the Dropwdown of an option if it DOESNT have any',()=>{

  })


})