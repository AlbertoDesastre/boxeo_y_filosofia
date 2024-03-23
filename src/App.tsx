import './App.css'
import HeaderMenu from './header-menu/HeaderMenu/HeaderMenu'
import { menuOptions } from './header-menu/HeaderMenu/assets/menuOptions'

function App() {


  return (
    <>
      <HeaderMenu menuOptions={menuOptions} />
      <section>
        <h1>Filosofía dentro del boxeo</h1>
      </section>
    </>
  )
}

export default App
