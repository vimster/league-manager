import React, {useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import TableChartIcon from '@material-ui/icons/TableChart';
import MailIcon from '@material-ui/icons/Email';
import AddIcon from '@material-ui/icons/AddCircleOutlined';
import EditIcon from '@material-ui/icons/Edit';
import ExportIcon from '@material-ui/icons/ImportExport';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import context from 'context';


function MadeWithLove(classes) {
              //<IconButton className={classes.fab} color="inherit" href="mailto:mr.potsdam@gmx.de">
            //<MailIcon label="Kontakt" />
            //</IconButton>
  return (
    <Typography variant="body2" color="textSecondary" align="center">

    </Typography>
  );
}

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

const getIcon = (key) => {
  if (key === "show")
    return (<TableChartIcon />);
  if (key === "edit")
    return (<EditIcon />);
  if (key === "export")
    return (<ExportIcon />);
}

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
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(1, 0)
  },
    fab: {
    margin: theme.spacing(1),
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
    const [showDrawer, setShowDrawer] = useState(false);
    const navigation = context.navigation;
    const drawerElements = context.drawer ? context.drawer : [];

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

    const drawerList = () => (
    <div
      className={classes.list}
      role="presentation">
      {drawerElements.length > 0 &&
      <List subheader={<ListSubheader>Ligaoptionen</ListSubheader>}>
        {drawerElements.map((element, index) => (
          <ListItem button key={element.text} onClick={() => window.location.href = element.href}>
            <ListItemIcon>{getIcon(element.icon)}</ListItemIcon>
            <ListItemText primary={element.text} />
          </ListItem>
        ))}
      </List>}

      <List subheader={<ListSubheader>Optionen</ListSubheader>}>
          <ListItem button key="NewLeague" onClick={() => window.location.href = "/leagueCreate.php"}>
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary="Neue Liga anlegen" />
          </ListItem>
          <ListItem button key="Contact" onClick={() => window.location.href = "mailto:mr.potsdam@gmx.de"}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Kontakt" />
          </ListItem>
      </List>
    </div>
  );

    return (
      <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={() => setShowDrawer(true)} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {navigation.label}
          </Typography>
        </Toolbar>
        </AppBar>
          {subnavi}

      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        {drawerList()}
      </Drawer>
            <main className={classes.container}>
    <Paper className={classes.paper}>
        <Component {...props} />   
        </Paper>
        </main>
      </div>

      <footer className={classes.footer}>
          <MadeWithLove classes={classes} />
      </footer>
    </ThemeProvider>
    );
  }

  return WithLayout;
}

export default withLayout;
