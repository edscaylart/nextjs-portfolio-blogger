import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

import {useStyles} from '../../styles'

type Props = {
  isOpen: boolean;
  onClose(): void;
  children: React.ReactNode;
}

const TemporaryDrawer = (props: Props) => {
  const classes = useStyles()
  
  return (
    <Hidden smUp implementation="css">
      <Drawer
        variant="temporary"
        anchor="left"
        open={props.isOpen}
        onClose={props.onClose}
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: true
        }}
      >
        {props.children}
      </Drawer>
    </Hidden>
  )
}

export default TemporaryDrawer
