import React from 'react'


function Data({name, email, password }) {
  return (
    <div>
        <h1>Form Data</h1>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
    </div>
  )
}

export default Data