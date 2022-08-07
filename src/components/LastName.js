import React from 'react'
import { useSelector } from 'react-redux'

const LastName = () => {
    const name = useSelector((state) => state.user.lastName)
    return <div className='font-bold'>{name || "Last Name"}</div>
}

export default LastName