import React from 'react'
import PermanentDrawer from './PermanentDrawer'
import TemporaryDrawer from './TemporaryDrawer'

import {useStyles} from '../../styles'

type Props = {
  isOpen: boolean;
  onClose(): void;
  children: React.ReactNode;
}

const Drawer = (props: Props) => {
  const classes = useStyles()

  return (
    <nav className={classes.drawer} arial-label="mailbox folder">
      <TemporaryDrawer isOpen={props.isOpen} onClose={props.onClose}>
        {props.children}
      </TemporaryDrawer>
      <PermanentDrawer>
        {props.children}
      </PermanentDrawer>
    </nav>
  )
}

export default Drawer
