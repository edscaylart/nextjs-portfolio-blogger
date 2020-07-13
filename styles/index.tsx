import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const drawerWidth = 240

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      }
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      }
    },
    colorPrimary: {
      backgroundColor: '#181818',
      color: '#bebebe'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      padding: '45px 40px',
      backgroundColor: '#181818',
      color: '#bebebe !important',
      borderRight: '1px solid #e1e4e8'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    drawerList: {
      margin: '45px -40px !important'
    },
    drawerItemList: {
      paddingLeft: '40px !important'
    },
    avatarContent: {
      margin: '1rem',
      borderRadius: '50%',
      textAlign: 'center'
    },
    avatar: {
      margin: '0 auto',
      width: '80%',
      borderRadius: '50%'
    }
  }),
)
