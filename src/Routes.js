import React, {useState, useEffect} from 'react';
import {Route, Routes, Navigate, useParams} from 'react-router-dom';

import ColorFactory from './ColorFactory';
import ColorPage from './ColorPage';
import ColorForm from './ColorForm';

const AppRoutes = () => {

    const [colors, setColors] = useState((JSON.parse(localStorage.getItem('colors'))));
    useEffect(()=> {
        localStorage.setItem('colors', JSON.stringify(colors));
    }, [colors])
    
    const addColor = (name, value) => {
        setColors(colors => {
        const colorCopy = {...colors}
        colorCopy[name] = value
        return colorCopy
        })
    }

    return(
        <div className='Routes'>
            <Routes>
                <Route exact path='/colors' element={<ColorFactory colors={colors} />} />
                <Route exact path='/colors/:name' element={<ColorPage colors={colors}/>} />
                <Route exact path='/colors/new' element={<ColorForm addColor={addColor}/>} />
                <Route path='*' element={<Navigate to='/colors' replace />} />
            </Routes>
        </div>
    )
}

export default AppRoutes;