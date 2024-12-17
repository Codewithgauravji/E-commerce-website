import React from 'react'

function One({name , email, password}) {
  return (
    <div style={{color:"blue"}}>
        <h1>Name:{name}</h1>
        <h1>Email:{email}</h1>
        <h1>Password:{password}</h1>
    </div>
  )
}

export default One