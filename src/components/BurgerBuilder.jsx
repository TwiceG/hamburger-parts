import React from 'react';

export const BurgerBuilder = ({ selectedParts }) => {
  const renderParts = () => {
    const renderedParts = [];
    if (selectedParts) {
      selectedParts.forEach((part) => {
        for (let i = 0; i < part.count; i++) {
          renderedParts.push(
            <div key={`${part.partName}-${i}`} className="image-holder">
              <img src={`/assets/${part.partName}.jpg`} alt={part.partName} />
            </div>
          );
        }
      });
    }
    return renderedParts;
  };

  return (
    <div>
      {renderParts()}
    </div>
  );
};
