

export const BurgerBuilder = ({ parts }) => {
    return (
        <div>
            <p>HEllloo</p>
            {parts.map((part, index) => (
                <div key={index} className="image-holder">
                    <img src={`/assets/${part}.jpg`} alt={part} />
                </div>
            ))}
        </div>
    );
};
