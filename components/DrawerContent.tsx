import React from 'react'
import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import SocialIcons from './SocialIcons'
import {useStyles} from '../styles'
import MenuItem from '../types/menu-item'

const MenuList: MenuItem[] = [
  {
    text: 'Index',
    href: '#'
  },
  {
    text: 'Works',
    href: '#'
  },
  {
    text: 'Personal Blog',
    href: '#'
  },
  {
    text: 'Contact me',
    href: '#'
  }
]

const DrawerContent = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div>
        <div className={classes.avatarContent}>
          <picture>
            <source srcSet='/assets/dogo184x184.webp' type='image/webp' className={classes.avatar} />
            <img src='/assets/dogo184x184.png' alt='avatar' className={classes.avatar} />
          </picture>
        </div>
        <div className="personal">
          <Typography variant="h6" align="center" noWrap>
            Edson Souza
          </Typography>
          <Typography variant="caption" align="center" noWrap>
            Full-stack javascript developer
          </Typography>
        </div>
        <List classes={{
          root: classes.drawerList
        }}>
          {MenuList.map((item, index) => (
            <Link href={item.href} key={item.text} passHref>
              <ListItem button classes={{ root: classes.drawerItemList }}>
                {index === 0 && <div className="current" />}
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <div className="social-block">
          <Typography variant="overline" noWrap>
            get in touch
          </Typography>
          <SocialIcons />
        </div>
      </div>
      <style jsx>{`
        .personal {
          text-transform: uppercase;
          text-align: center;
          margin-left: -40px;
          margin-right: -40px; 
        }
        .social-block {
          text-transform: uppercase;
        }
        .current::after {
          content: " ";
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
          border-right: 8px solid #fff;
          top: 14px;
          left: auto;
          right: 0;
        }
      `}</style>
    </React.Fragment>
  )
}

export default DrawerContent
