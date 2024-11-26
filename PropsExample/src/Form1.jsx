import React from 'react'
import Data from './Data'

function Form1() {
  return (
    <div>
        <div>
            <fieldset>
            <form>
                <label>Name:</label>
                <input type="text" name='name'/>
                <br /><br></br>
                <label>Email:</label>
                <input type="email" name='email' /><br></br><br></br>
                <label>Password:</label>
                <input type="Password"  name='password'/>
            </form>
            </fieldset>
        </div>
        <Data name="gaurav" email="gy063355@gmail.com" password="1234512345"/>
    </div>
  )
}

export default Form1