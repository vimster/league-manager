import React from 'react';
import Hidden from '@material-ui/core/Hidden';
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
  }

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
            <Hidden smDown>
            <TableCell align="center">Bälle</TableCell>
            </Hidden>
            <Hidden xsDown>
            <TableCell align="center">Sätze</TableCell>
            </Hidden>
            <TableCell align="center">Punkte</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={index}>
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="left">{team.name}</TableCell>
              <TableCell align="center">{team.games}</TableCell>
              <Hidden smDown>
              <TableCell align="center">{team.balls}:{team.ballsAgainst}</TableCell>
              </Hidden>
              <Hidden xsDown>
              <TableCell align="center">{team.sets}:{team.setsAgainst}</TableCell>
              </Hidden>
              <TableCell align="center"><b>{team.points}:{team.pointsAgainst}</b></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    );
  }
}

export default withStyles(styles)(ResultTable);
