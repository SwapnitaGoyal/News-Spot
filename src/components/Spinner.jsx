import React from 'react'
import loading from './loading.gif'

export default function Spinner() {

    return (
      <div>
        <img src={loading} alt="loading" style={{width: "80px"}} />
      </div>
    )
}

