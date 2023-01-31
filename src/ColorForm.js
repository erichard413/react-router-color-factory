import React, {useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import './ColorForm.css';

const ColorForm = ({addColor}) => {
    const navigate = useNavigate();
    const INITIAL_STATE = {
        name: "",
        value: "#000000"
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(formData.name, formData.value);
        navigate('/colors');
    }
    
    return (
        <div className="ColorForm">
            <div className="ColorForm-box">
                <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Color name </label>
                            <input 
                                name = "name"
                                id="name"
                                type="text" 
                                placeholder="New Color" 
                                value={formData.name} 
                                onChange={handleChange} 
                        />
                        <label htmlFor="value">Color value </label>
                            <input 
                                name = "value"
                                id="value"
                                type="color" 
                                value={formData.value} 
                                onChange={handleChange} 
                            />
                            <p>
                               <button>add</button> 
                               <button onClick={()=> {<Navigate to="/colors" />}}>back</button> 
                            </p>
                        
                </form>
            </div>
        </div>
    )
}

export default ColorForm;