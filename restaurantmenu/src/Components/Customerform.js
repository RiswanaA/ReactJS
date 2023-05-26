import React from 'react';
import '../App.css';
function Customerform(){
    return(
        <div className='Formstyling'>
            <form >
                <label>CUSTOMER NAME:     </label>
                <input type="text"  id="customername"/> <br></br><br></br>
                <input type="submit" value="SUBMIT HERE"/>
            </form>
        </div>
    )
}

export default Customerform;