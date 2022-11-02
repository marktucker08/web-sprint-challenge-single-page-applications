import React, { useState } from "react";
import * as Yup from 'yup';



function Form () {

const [formValues, setFormValues] = useState({ 
    name: "", 
    size: null, 
    pepperoni: false, 
    sausage: false, 
    pineapple: false, 
    steak: false, 
    bacon: false, 
    mushrooms: false, 
    special: "" 
})

const [errors, setErrors] = useState({
    name: "", 
    size: "", 
    pepperoni: "", 
    sausage: "", 
    pineapple: "", 
    steak: "", 
    bacon: "", 
    mushrooms: "", 
    special: "" 
  });

const handleChange = event => {
    const { name, type, checked, value } = event.target;
    const updatedInfo = type === 'checkbox' ? checked : value;
    setFormValues({...formValues, [name]: updatedInfo});
} 

    return ( 
        <>
        <div className="form">
            <h3>Order Fresh Pizza - Ready in Minutes!</h3>
            <form id="pizza-form">
                <label>Name: <input onChange={handleChange} name="name" type="text" value={formValues.name} id="name-input"></input></label>
                <div className="sizes">
                    <h3>Choose Your Pizza Size:</h3>

                    <select onChange={handleChange} value={formValues.size} name="size" id="size-dropdown">
                    <option value="">--select a size--</option>
                        <option value="1">Individual</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                        <option value="4">Extra Large</option>
                    </select>
    
                </div>
                <div className="toppings">
                <h3>Choose Your Toppings!</h3>
                    <label><input onChange={handleChange} type="checkbox" name="pepperoni" checked={formValues.pepperoni} />pepperoni</label>
                    <label><input onChange={handleChange} type="checkbox" name="sausage" checked={formValues.sausage} />sausage</label>
                    <label><input onChange={handleChange} type="checkbox" name="pineapple" checked={formValues.pineapple} />pineapple</label>
                    <label><input onChange={handleChange} type="checkbox" name="steak" checked={formValues.steak}/>steak</label>
                    <label><input onChange={handleChange} type="checkbox" name="bacon" checked={formValues.bacon} />bacon</label>
                    <label><input onChange={handleChange} type="checkbox" name="mushrooms" checked={formValues.mushrooms}/>mushrooms</label>
                </div>
                <div className="special">
                    <label>Special Instructions: <input onChange={handleChange} type="text" name="special" value={formValues.special} id="special-text" />
                    </label>
                </div>
                <button id="order-button">Place Order!</button>
            </form>
        </div>
        </>

    )
}


export default Form;