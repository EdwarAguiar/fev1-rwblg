import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { FrameLG, Button } from './styles'
import { FlagVZLA } from '../FlagVZLA'
import { FlagUSA } from '../FlagUSA'

export const Language = () => {
  const { isSP, activateSP, activateEN } = useContext(AppContext)
  // console.log(isSP)

  if (isSP) {
    return (
      <FrameLG>
        <div>
          <Button className={isSP ? 'selected' : ''} onClick={activateSP}> <FlagVZLA /> Español </Button>
        </div>
        <div>
          <Button className={isSP ? '' : 'selected'} onClick={activateEN}> <FlagUSA /> Inglés </Button>
        </div>
      </FrameLG>
    )
  } else {
    return (
      <FrameLG>
        <div>
          <Button className={isSP ? 'selected' : ''} onClick={activateSP}> <FlagVZLA /> Spanish </Button>
        </div>
        <div>
          <Button className={isSP ? '' : 'selected'} onClick={activateEN}> <FlagUSA /> English </Button>
        </div>
      </FrameLG>
    )
  }
}

// export default Language
