import React from 'react'

// export const Notfound = () => {
const NotfoundComponent = () => {
  return (
    <h2>Page Not Found</h2>
  )
}

export const Notfound = React.memo(NotfoundComponent)
