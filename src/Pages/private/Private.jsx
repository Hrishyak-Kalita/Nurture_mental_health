import React from 'react'
import { useAuth } from '../../Context/context';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {isAuthenticated}= useAuth()

    if(!isAuthenticated) return <Navigate to="/login"/>

  return (
    children

  )
}

export default Private