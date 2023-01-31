import React from 'react';
import {Link, useLocation, Navigate, useParams} from 'react-router-dom'
import './ColorPage.css';

const ColorPage = ({colors}) => {
    const {name} = useParams();
    const colorValue = colors[name];

    if (!colorValue) {
        return <Navigate to="/colors" />
    }

    return (
        <div className="ColorPage" style={{backgroundColor: colorValue}}>
            <p>
                THIS IS {name.toUpperCase()}!
            </p>
            <p>
                ISN'T IT BEAUTIFUL??
            </p>
            <p>
               <Link to={'/colors'}>GO BACK</Link> 
            </p>
        </div>
    )
}

export default ColorPage;