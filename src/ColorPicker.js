import React from 'react';
import {Link} from 'react-router-dom';
import './ColorPicker.css';

const ColorPicker = ({colors}) => {
    return (
        <div className="ColorPicker">
            <h2>Please select a color.</h2>
            <ul className="ColorPicker-links">
                {colors && Object.keys(colors).map(c => <li key={c}><Link to={`/colors/${c}`} >{c}</Link></li>)}
            </ul>
        </div>
    )
}

export default ColorPicker;