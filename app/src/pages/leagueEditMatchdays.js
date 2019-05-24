import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import {DatePicker} from "@material-ui/pickers";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import GamesEditTable from '../components/gamesedittable';
import withLayout from './withLayout';
import league from '../data/league';


const styles = theme => ({
  button: {
    margin: '30px',
  }
});


class LeagueEditMatchdaysPage extends React.Component {

  state = {
    matchdays: league.matchdays
  }

  addMatchday = event => {
    league.addMatchday();
    this.setState({matchdays: league.matchdays});
  }

  addGame = matchday => {
    matchday.games.push({});
    this.setState({matchdays: league.matchdays});
  }

  handleDateChange = (matchday, date) => {
    matchday.date = date;
    this.setState({matchdays: league.matchdays});
  }

  handleGameChange = (game) => {

  }

  refresh = () => {
    this.setState({matchdays: league.matchdays});
  }

  render() {
    const { classes } = this.props;
    const { matchdays } = this.state;
    const date = new Date();
    return (
      <div>
        {matchdays.map((matchday, index) => (
          <div key={index}>
            <Typography variant="h6" color="inherit">
            {index + 1}. Spieltag
          </Typography>
          <TextField
            align="left"
            id="date"
            label="Datum"
            type="date"
            value={matchday.date}
            onChange={(event) => this.handleDateChange(matchday, event.target.value)}
          />
          <GamesEditTable refresh={this.refresh} games={matchday.games} />

          <Button variant="contained" color="primary" className={classes.button} onClick={() => this.addGame(matchday)}>
            Begegnung hinzufügen
          </Button>
         </div>
        ))}

      <div>
      <Button variant="contained" color="primary" className={classes.button} onClick={this.addMatchday}>
        Spieltag hinzufügen
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={league.save}>
        Speichern
      </Button>
      </div>
      </div>
    );
  }
}

let Page = withLayout(withStyles(styles)(LeagueEditMatchdaysPage));
ReactDOM.render(<Page />, document.querySelector('#leagueEditMatchdays'));
