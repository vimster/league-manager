import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import context from 'context';


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const useStyles = makeStyles(() => {
  return {
      container: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(4))]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  tabs: {
    flexGrow: 1,
  },
    paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(6))]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}
});

function withLayout(Component) {
  function WithLayout(props) {

    const classes = useStyles({theme: theme});
    const navigation = context.navigation;

    let subnavi;
    if (navigation.subnavi) {
      subnavi = <Paper className={classes.tabs}>
      <Tabs
        value={navigation.subnavi.selected}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
                {navigation.subnavi.items.map((navitem) => (
                  <Tab key={navitem.name} label={navitem.name} href={navitem.href} value={navitem.name} />
          ))}
      </Tabs>
    </Paper>;
    }

    return (
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {navigation.label}
          </Typography>
        </Toolbar>
        </AppBar>
          {subnavi}
            <main className={classes.container}>
    <Paper className={classes.paper}>
        <Component {...props} />   
        </Paper>
        </main>
      </div>
    </ThemeProvider>
    );
  }

  return WithLayout;
}

export default withLayout;
