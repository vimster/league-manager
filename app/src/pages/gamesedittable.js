import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import league from '../data/league';

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

class GamesEditTable extends React.Component {

  render() {

    const { refresh, classes, games } = this.props;
    const teams = league.teams;

    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Mannschaft 1</TableCell>
            <TableCell align="center">Mannschaft 2</TableCell>
            <TableCell align="center">Satz 1</TableCell>
            <TableCell align="center">Satz 2</TableCell>
            <TableCell align="center">Satz 3</TableCell>
            <TableCell align="center">Satz 4</TableCell>
            <TableCell align="center">Satz 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map(game => (
            <TableRow key={game.team1 + game.team2}>
              <TableCell>
                <Select value={game.team1} onChange={(event) => {game.team1 = event.target.value; refresh()}}>
                          {teams.map((team) => (
                   <MenuItem value={team.id}>{team.name}</MenuItem>
                ))}
                </Select>

              </TableCell>
              <TableCell align="left">
                <Select value={game.team2} onChange={(event) => {game.team2 = event.target.value; refresh()}}>
                          {teams.map((team) => (
                   <MenuItem value={team.id}>{team.name}</MenuItem>
                ))}
                </Select>
              </TableCell>
              <TableCell align="center">

<TextField style={{width: 40}} value={game.set11} onChange={(event) => {game.set11 = parseInt(event.target.value); refresh()}} type="number" />
<TextField style={{width: 40}} value={game.set12} onChange={(event) => {game.set12 = parseInt(event.target.value); refresh()}} type="number" />

              </TableCell>
              <TableCell align="center">

<TextField style={{width: 40}} value={game.set21} onChange={(event) => {game.set21 = parseInt(event.target.value); refresh()}} type="number" />
<TextField style={{width: 40}} value={game.set22} onChange={(event) => {game.set22 = parseInt(event.target.value); refresh()}} type="number" />

              </TableCell>
              <TableCell align="center">

<TextField style={{width: 40}} value={game.set31} onChange={(event) => {game.set31 = parseInt(event.target.value); refresh()}} type="number" />
<TextField style={{width: 40}} value={game.set32} onChange={(event) => {game.set32 = parseInt(event.target.value); refresh()}} type="number" />
 
              </TableCell>
              <TableCell align="center">

<TextField style={{width: 40}} value={game.set41} onChange={(event) => {game.set41 = parseInt(event.target.value); refresh()}} type="number" />
<TextField style={{width: 40}} value={game.set42} onChange={(event) => {game.set42 = parseInt(event.target.value); refresh()}} type="number" />

              </TableCell>
              <TableCell align="center">

<TextField style={{width: 40}} value={game.set51} onChange={(event) => {game.set51 = parseInt(event.target.value); refresh()}} type="number" />
<TextField style={{width: 40}} value={game.set52} onChange={(event) => {game.set52 = parseInt(event.target.value); refresh()}} type="number" />
              
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>


    );
  }
}

export default withStyles(styles)(GamesEditTable);
