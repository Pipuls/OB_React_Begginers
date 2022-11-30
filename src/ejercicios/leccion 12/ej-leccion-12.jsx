import React, { useState } from 'react';
import './ej12Styles.css'


const EjLeccion12 = () => {

    const [color, setColor] = useState('black');
    const [doubleClick, setDoubleClick] = useState(0)

    const [manageInterval, setManageInterval] = useState(0)

    const getColor = () => Math.floor(Math.random() * 256);

    const getRGB = (red, green, blue) => {
        return (
            '#' +
            [red, green, blue]
                .map((c) => {
                    const hex = c.toString(16);
                    return hex.lenght === 1 ? '0' + hex : hex;
                })
                .join('')
        );
    };
    
    const generateRGB = () => {
        const rgb = {
            r: getColor(),
            g: getColor(),
            b: getColor(),
        };
        return setColor(getRGB(rgb.r, rgb.g, rgb.b))
    }
    
    const onChangeColor = () => {
        return clearInterval(setManageInterval(setInterval(generateRGB, 500)));
    }
    const onStopChangeColor = () => {
        return clearInterval(manageInterval);
    }
    const onCickStopChangeColor = () => {
        return clearInterval(manageInterval);
    }

    return (
        <div
        id='cuadrado'
        className='cuadrado-ej'
        style={{ backgroundColor: color }}
        onMouseOver={onChangeColor}
        onMouseLeave={onStopChangeColor}
        onDoubleClick={onCickStopChangeColor}>

    </div>
);
}


export default EjLeccion12;
