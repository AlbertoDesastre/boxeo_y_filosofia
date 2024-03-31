import './index.css'
import MenuOptions from './header-menu/HeaderMenu/Menu'
import { menuOptions } from './header-menu/HeaderMenu/assets/menuOptions'

function App() {
  return (
    <>
      <Menu menuOptions={menuOptions} />
      <section>
        <h1>Filosofía dentro del boxeo</h1>
      </section>
    </>
  )
}

export default App
