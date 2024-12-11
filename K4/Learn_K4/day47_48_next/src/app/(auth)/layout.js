import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div>
        <header>AuthLayout</header>
        <main>{children}</main>
    </div>
  )
}

export default AuthLayout