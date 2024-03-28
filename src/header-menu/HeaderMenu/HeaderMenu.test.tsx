
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeaderMenu from "./HeaderMenu";
import { Menu } from "./assets/menuOptions";


const mockOptions: Menu = [
  {
    main: { title: "¿Qué es esto?", redirection: "/about" },
    dropdown: [ 
    {
      option: "Esto es",
      redirection: "/esto-es",
    },
    { option: "Queso", redirection: "/queso" },],
  },
  {
    main: { title: "Artículos", redirection: "/articulos" },
    dropdown: [
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
    dropdown: [],
  },
  {
    main: { title: "Opina tú", redirection: "/registro" },
    dropdown: [],
  },
];

// this is a direct recommendation of react-testing-library docs for making use of userEvents
// check the super interesting resources, first on https://kentcdodds.com/blog/avoid-nesting-when-youre-testing 
// and https://testing-library.com/docs/user-event/intro/#writing-tests-with-userevent
function setup(component:JSX.Element){
 return { user: userEvent.setup(), ...render(component) };
}

describe("Header Menu - Options",()=>{
  test('should render options provided, with correct styles (display flex on <header> and <nav>)',()=>{
     render(<HeaderMenu menuOptions={mockOptions} />)

     //renders the options
     expect(screen.queryByText(/Tesoros/i)).toBeInTheDocument();
     expect(screen.queryByText(/Opina/i)).toBeInTheDocument();
     expect(screen.queryByText(/Non existent option in the mock/i)).not.toBeInTheDocument(); 
   })
})

describe("Header Menu - Dropdowns rendered", () => {

  test('should render only the Dropdown owned by an option (one click = one dropdown)', async () => {
    // this {user} is equivalent to returning userEvent, to perform user interactions with the DOM
    const { user } = setup(<HeaderMenu menuOptions={mockOptions} />);
    const utils = {
      option: screen.queryByText(/Artículos/i),
      dropdown: screen.queryByText(/Reflexiones/i),
      unrelatedOption: screen.queryByText(/¿Qué es esto?/i),
      unrelatedDropdown: screen.queryByText(/Queso/i),
    };

    // if the user hasn't click on an option, "dropdown/s" shouldn't render
    expect(utils.option).toBeVisible(); 
    expect(utils.dropdown).not.toBeVisible(); 
    expect(utils.unrelatedOption).toBeVisible(); 
    expect(utils.unrelatedDropdown).not.toBeVisible(); 
   
   // if the user clicks on the option with a dropdown, it should render ONLY that dropdown 
    await user.click(utils.option as Element);
    expect(utils.dropdown).toBeVisible(); 
    expect(utils.unrelatedDropdown).not.toBeVisible(); 

  })

  test('shouldnt render the Dropwdown of an option if it DOESNT have any',()=>{

  })


})