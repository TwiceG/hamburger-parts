
import './App.css'
import { BurgerBuilder } from './components/BurgerBuilder'

function App() {
  
  const parts = ["hamburger-puff-top","hamburger-patty","hamburger-puff-bottom"];

  return (
    <>
    <div className="grid-container">
      <div className="left-column">
        <BurgerBuilder parts={parts} />
      </div>
      <div className="right-column">
        {/* Content for the right column */}
      </div>
    </div>
      
       
    </>
  )
}

export default App
