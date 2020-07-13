import React, { ReactNode } from 'react'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Drawer from './Drawer'
import DrawerContent from './DrawerContent'
import {useStyles} from '../styles'
import siteConfig from '../site.config'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = siteConfig.baseName }: Props) => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='title' content={siteConfig.baseName} />
        <meta name='description' content={siteConfig.desc} />
        <meta property='og:title' content={siteConfig.baseName} />
        <meta property='og:description' content={siteConfig.desc} />
        <meta property='og:image' content={`${siteConfig.baseUrl}/assets/prtsc700.jpg`} />
        <meta property='og:url' content={siteConfig.baseUrl} />
      </Head>
      <CssBaseline />
      <Hidden smUp implementation="css">
        <AppBar classes={{ colorPrimary: classes.colorPrimary }} >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Scaylart.dev
            </Typography>
          </Toolbar>
        </AppBar>
      </Hidden>
      <Drawer isOpen={drawerOpen} onClose={handleDrawerToggle}>
        <DrawerContent />
      </Drawer>
      <main className={classes.content}>
        <Hidden smUp implementation="css">
          <div className={classes.toolbar} />
        </Hidden>
        {children}
      </main>
    </div>
  )
}

export default Layout
