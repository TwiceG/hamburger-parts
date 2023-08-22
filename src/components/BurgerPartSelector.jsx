export const BurgerPartSelector = ({ selectedParts, setSelectedParts }) => {

    const handleChange = (event, partName) => {
      const newCount = parseInt(event.target.value, 10);
      const updatedParts = selectedParts.map((part) => ({
        ...part,
        count: part.partName === partName ? newCount : part.count,
      }));
  
      setSelectedParts(updatedParts);
    };
  
    return (
      <div>
        {selectedParts.map((part, index) => (
          <div key={index}>
            <input
              type="number"
              min={0}
              max={2}
              value={part.count} 
              onChange={(event) => handleChange(event, part.partName)}
            />
            <label htmlFor={index}>{part.partName}</label>
          </div>
        ))}
      </div>
    );
  };
  