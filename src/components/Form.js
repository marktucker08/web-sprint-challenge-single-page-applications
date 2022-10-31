import React, { useState } from "react";



function Form () {

    return ( 
        <>
        <div className="form">
            <h3>Order Fresh Pizza Ready in Minutes!</h3>
            <form id="pizza-form">
                <label>Name<input name="name" type="text"></input></label>
            </form>
        </div>
        </>

    )
}


export default Form;