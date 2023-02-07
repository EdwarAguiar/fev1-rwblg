import React from 'react'

// export const Notfound = () => {
const NotfoundComponent = () => {
  return (
    <h2>Page Not Found</h2>
  )
}

const Notfound = React.memo(NotfoundComponent)

export default Notfound
