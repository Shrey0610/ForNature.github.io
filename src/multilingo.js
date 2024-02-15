import React, {useEffect, useState} from 'react'

const Multilingo = () => {
    const [backendData, setBackendData]= useState([{}])

    useEffect(()=>{
        fetch("http://localhost:9005/chat").then(response=>response.json()).then(
            data=>{
                setBackendData(data)
            }
        )
    }, [])
  return (
    <div>
      {backendData.response}
    </div>
  )
}

export default Multilingo;
