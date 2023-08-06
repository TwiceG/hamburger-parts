import React from 'react';

export const BurgerPartSelector = ({ parts, selectedParts, setSelectedParts }) => {
  const handleChange = (event) => {
    const itemValue = event.target.value;
    let updatedItems;

    if (event.target.checked) {
      if (!selectedParts.includes(itemValue)) {
        // Ensure hamburger-puff-top is always the first item
        if (itemValue === 'hamburger-puff-top') {
          updatedItems = ['hamburger-puff-top', ...selectedParts];
        } else {
          updatedItems = [...selectedParts, itemValue];
        }
      }
    } else {
      // Remove the item from the array
      updatedItems = selectedParts.filter((item) => item !== itemValue);
    }

    // Ensure hamburger-puff-bottom is always the last item
    if (updatedItems.includes('hamburger-puff-bottom')) {
      updatedItems = updatedItems.filter((item) => item !== 'hamburger-puff-bottom');
      updatedItems.push('hamburger-puff-bottom');
    }

    setSelectedParts(updatedItems);
  };

  return (
    <div>
      {parts.map((part, index) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={handleChange}
            value={part}
            id={index}
            checked={selectedParts.includes(part)}
          />
          <label htmlFor={index}>{part}</label>
        </div>
      ))}
    </div>
  );
};
