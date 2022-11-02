import React, { useState } from "react";



function Form () {

    return ( 
        <>
        <div className="form">
            <h3>Order Fresh Pizza - Ready in Minutes!</h3>
            <form id="pizza-form">
                <label>Name: <input name="name" type="text" id="name-input"></input></label>
                <div className="sizes">
                    <h3>Choose Your Pizza Size:</h3>

                    <select name="size" id="size-dropdown">
                        <option value="1">Individual</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                        <option value="4">Extra Large</option>
                    </select>
                
                </div>
                <div className="toppings">
                <h3>Choose Your Toppings!</h3>
                    <label><input type="checkbox" name="pepperoni" />pepperoni</label>
                    <label><input type="checkbox" name="sausage" />sausage</label>
                    <label><input type="checkbox" name="pineapple" />pineapple</label>
                    <label><input type="checkbox" name="steak" />steak</label>
                    <label><input type="checkbox" name="bacon" />bacon</label>
                    <label><input type="checkbox" name="mushrooms" />mushrooms</label>
                </div>
                <div className="special">
                    <label>Special Instructions: <input type="text" id="special-text" />
                    </label>
                </div>
            </form>
        </div>
        </>

    )
}


export default Form;