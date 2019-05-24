import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withLayout from './withLayout';
import league from '../data/league';
import TeamList from '../components/teamlist';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  button: {
    margin: '30px',
  }
});


class LeagueEditTeamsPage extends React.Component {
  state = {
    teams: league.teams
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRemoveTeam = id => {
    league.removeTeam(id);
    this.setState({teams: league.teams});
  }

  handleAddTeam = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      league.addTeam(event.target.value);
      this.setState({teams: league.teams});
    }
  }

  render() {
    const { classes } = this.props;
    const { teams } = this.state;

    return (
      <div>
      <TeamList teams={teams} handleRemove={this.handleRemoveTeam} />
      <TextField 
              fullWidth={true}
              label="Mannschaftsname"
              onKeyPress={this.handleAddTeam}
           ></TextField>
      <Button variant="contained" className={classes.button} color="primary" onClick={league.save}>
        Speichern
      </Button>
      </div>
    );
  }
}

let Page = withLayout(withStyles(styles)(LeagueEditTeamsPage));
ReactDOM.render(<Page />, document.querySelector('#leagueEditTeams'));
