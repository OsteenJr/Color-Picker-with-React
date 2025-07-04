import React, { useState } from 'react';

function ColorPicker() {
    const [color, setColor] = useState('#FFF');
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    return(
    <>
        <div className="color-container"> 
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input 
                type="color" 
                value={color} 
                onChange={handleColorChange} 
                className="color-input" />
            
        </div>
    </>
    );
};
export default ColorPicker;