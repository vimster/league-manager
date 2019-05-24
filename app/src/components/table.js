import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import league from '../data/league';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class ResultTable extends React.Component {

  state = {
    league: league,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {

    const { classes } = this.props;
    const teams = this.state.league.getTable();

    return (
<Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Platz</TableCell>
            <TableCell align="center">Mannschaft</TableCell>
            <TableCell align="center">Spiele</TableCell>
            <TableCell align="center">Bälle</TableCell>
            <TableCell align="center">Sätze</TableCell>
            <TableCell align="center">Punkte</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="left">{team.name}</TableCell>
              <TableCell align="center">{team.games}</TableCell>
              <TableCell align="center">{team.balls}:{team.ballsAgainst}</TableCell>
              <TableCell align="center">{team.sets}:{team.setsAgainst}</TableCell>
              <TableCell align="center">{team.points}:{team.pointsAgainst}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    );
  }
}

export default withStyles(styles)(ResultTable);
