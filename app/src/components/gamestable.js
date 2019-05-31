import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import league from '../data/league';

import Hidden from '@material-ui/core/Hidden';
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

class GamesTable extends React.Component {

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

    const { classes, games } = this.props;
    const result = (p1, p2) => {
      return (p1 ? p1 : "-") + ":" + (p2 ? p2 : "-");
    }

    return (
<Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Mannschaft 1</TableCell>
            <TableCell align="center">Mannschaft 2</TableCell>
            <Hidden smDown>
            <TableCell align="center">Satz 1</TableCell>
            <TableCell align="center">Satz 2</TableCell>
            <TableCell align="center">Satz 3</TableCell>
            <TableCell align="center">Satz 4</TableCell>
            <TableCell align="center">Satz 5</TableCell>
            </Hidden>
            <TableCell align="center">Sätze</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map(game => (
            <TableRow key={game.team1 + game.team2}>
              <TableCell>{league.getTeamnameById(game.team1)}</TableCell>
              <TableCell align="left">{league.getTeamnameById(game.team2)}</TableCell>
              <Hidden smDown>
              <TableCell align="center">{result(game.set11, game.set12)}</TableCell>
              <TableCell align="center">{result(game.set21, game.set22)}</TableCell>
              <TableCell align="center">{result(game.set31, game.set32)}</TableCell>
              <TableCell align="center">{result(game.set41, game.set42)}</TableCell>
              <TableCell align="center">{result(game.set51, game.set52)}</TableCell>
              </Hidden>
              <TableCell align="center"><b>{league.getSets(game, true)}:{league.getSets(game, false)}</b></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    );
  }
}

export default withStyles(styles)(GamesTable);
