
import { useState } from 'react';
import './App.css';
import { BurgerBuilder } from './components/BurgerBuilder';
import { BurgerPartSelector } from './components/BurgerPartSelector';

function App() {
  
  const [selectedParts, setSelectedParts] = useState(["hamburger-puff-top","hamburger-patty","hamburger-puff-bottom"]); 
  const parts = ["hamburger-puff-top","salad","tomatoe","cheese","hamburger-patty","hamburger-puff-bottom"];


  return (
    <>
    <div className="grid-container">
      <div className="left-column">
        <BurgerBuilder selectedParts={selectedParts} />
      </div>
      <div className="right-column">
        <BurgerPartSelector parts={parts} selectedParts={selectedParts} setSelectedParts={setSelectedParts}/>
      </div>
    </div>
      
       
    </>
  )
}

export default App
