import { useState } from 'react';
import './App.css';
import { BurgerBuilder } from './components/BurgerBuilder';
import { BurgerPartSelector } from './components/BurgerPartSelector';
import { EmailForm } from './components/EmailForm';

function App() {
  const initialParts = [
    { partName: 'hamburger-puff-top', count: 1 },
    { partName: 'salad', count: 0 },
    { partName: 'tomatoe', count: 0 },
    { partName: 'cheese', count: 0 },
    { partName: 'hamburger-patty', count: 1 },
    { partName: 'hamburger-puff-bottom', count: 1 },
  ];

  const [selectedParts, setSelectedParts] = useState(initialParts);

  return (
    <>
      <div className="grid-container">
        <div className="left-column">
          <BurgerBuilder selectedParts={selectedParts} />
        </div>
        <div className="right-column">
          <BurgerPartSelector selectedParts={selectedParts} setSelectedParts={setSelectedParts} />
          <EmailForm selectedParts={selectedParts}/>
        </div>
      </div>
    </>
  );
}

export default App;
