import React, {useState} from 'react';
import Header from './Header';
import ColorPicker from './ColorPicker';
import './ColorFactory.css';

const ColorFactory = ({colors}) => {
    return (
        <div className="ColorFactory">
            <Header />
            <ColorPicker colors={colors} />
        </div>
    )
}

export default ColorFactory;