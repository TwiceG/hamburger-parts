

export const BurgerBuilder = ({ selectedParts }) => {
    return (
        <div>
            <p>HEllloo</p>
            {selectedParts.map((part, index) => (
                <div key={index} className="image-holder">
                    <img src={`/assets/${part}.jpg`} alt={part} />
                </div>
            ))}
        </div>
    );
};
