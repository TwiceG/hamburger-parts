export const BurgerPartSelector = ({ parts, selectedParts, setSelectedParts }) => {
    const handleChange = (event, part) => {
      const newCount = parseInt(event.target.value, 10);
      const updatedParts = [...selectedParts];
      const currentCount = countPart(part);
  
      if (part === 'hamburger-puff-top') {
        if (newCount > currentCount) {
          // Add "hamburger-puff-top" to the array at the beginning (up to the new count)
          for (let i = 0; i < Math.min(newCount - currentCount, 1); i++) {
            updatedParts.unshift(part);
          }
        } else if (newCount < currentCount) {
          // Remove "hamburger-puff-top" from the array (up to the new count)
          for (let i = 0; i < Math.abs(newCount - currentCount); i++) {
            const index = updatedParts.indexOf(part);
            if (index !== -1) {
              updatedParts.splice(index, 1);
            }
          }
        }
    } else if (part === 'hamburger-puff-bottom') {
        if (newCount > currentCount && currentCount < 2) {
          // Add "hamburger-puff-bottom" to the array at the end (up to the new count and max count 2)
          for (let i = 0; i < Math.min(newCount - currentCount, 2 - currentCount); i++) {
            updatedParts.push(part);
          }
        } else if (newCount < currentCount) {
          // Remove "hamburger-puff-bottom" from the array (up to the new count)
          for (let i = 0; i < Math.abs(newCount - currentCount); i++) {
            const index = updatedParts.lastIndexOf(part);
            if (index !== -1) {
              updatedParts.splice(index, 1);
            }
          }
        }
      } else {
        // Handle other parts
        if (newCount > currentCount) {
          // Add part to the array multiple times to reach the new count
          for (let i = 0; i < newCount - currentCount; i++) {
            updatedParts.push(part);
          }
        } else if (newCount < currentCount) {
          // Remove part from the array multiple times to reach the new count
          for (let i = 0; i < currentCount - newCount; i++) {
            const index = updatedParts.indexOf(part);
            if (index !== -1) {
              updatedParts.splice(index, 1);
            }
          }
        }
      }
  
      // Ensure "hamburger-puff-bottom" is always at the end
      const puffBottomIndex = updatedParts.indexOf('hamburger-puff-bottom');
      if (puffBottomIndex !== -1) {
        updatedParts.splice(puffBottomIndex, 1);
      }
      updatedParts.push('hamburger-puff-bottom');
  
      setSelectedParts(updatedParts);
    };
  
    const countPart = (part) => {
      let count = 0;
      for (let i = 0; i < selectedParts.length; i++) {
        if (selectedParts[i] === part) {
          count++;
        }
      }
      return count;
    };
  
    return (
      <div>
        {parts.map((part, index) => (
          <div key={index}>
            <input
              type="number"
              min={0}
              max={2}
              value={countPart(part)}
              onChange={(event) => handleChange(event, part)}
            />
            <label htmlFor={index}>{part}</label>
          </div>
        ))}
      </div>
    );
  };
  