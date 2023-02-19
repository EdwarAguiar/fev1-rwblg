import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { FrameLG, Button } from './styles'
import { FlagVZLA } from '../FlagVZLA'
import { FlagUSA } from '../FlagUSA'
import { Logo } from '../Logo'

export const Language = () => {
  const { isSP, activateSP, activateEN } = useContext(AppContext)
  // console.log(isSP)

  if (isSP) {
    if (window.innerWidth < 600) {
      return (
        <FrameLG>
          <div> <Button className={isSP ? 'selected' : ''} onClick={activateSP}> <FlagVZLA /> </Button> </div>
          <div> <Logo /> </div>
          <div> <Button className={isSP ? '' : 'selected'} onClick={activateEN}> <FlagUSA /> </Button> </div>
        </FrameLG>
      )
    } else if (window.innerWidth >= 600) {
      return (
        <FrameLG>
          <div> <Button className={isSP ? 'selected' : ''} onClick={activateSP}> <FlagVZLA /> Español </Button> </div>
          <div> <Logo /> </div>
          <div> <Button className={isSP ? '' : 'selected'} onClick={activateEN}> <FlagUSA /> Inglés </Button> </div>
        </FrameLG>
      )
    }
  } else {
    if (window.innerWidth < 600) {
      return (
        <FrameLG>
          <div> <Button className={isSP ? 'selected' : ''} onClick={activateSP}> <FlagVZLA /> </Button> </div>
          <div> <Logo /> </div>
          <div> <Button className={isSP ? '' : 'selected'} onClick={activateEN}> <FlagUSA /> </Button> </div>
        </FrameLG>
      )
    } else if (window.innerWidth >= 600) {
      return (
        <FrameLG>
          <div> <Button className={isSP ? 'selected' : ''} onClick={activateSP}> <FlagVZLA /> Spanish </Button> </div>
          <div> <Logo /></div>
          <div> <Button className={isSP ? '' : 'selected'} onClick={activateEN}> <FlagUSA /> English </Button> </div>
        </FrameLG>
      )
    }
  }
}

// export default Language
