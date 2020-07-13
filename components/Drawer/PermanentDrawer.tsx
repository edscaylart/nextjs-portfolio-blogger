import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

import {useStyles} from '../../styles'

type Props = {
  children: React.ReactNode;
}

const PermanentDrawer = ({ children }: Props) => {
  const classes = useStyles()
  
  return (
    <Hidden xsDown implementation="css">
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper
        }}
        open
      >
        {children}
      </Drawer>
    </Hidden>
  )
}

export default PermanentDrawer
