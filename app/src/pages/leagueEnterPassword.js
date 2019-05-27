import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withLayout from './withLayout';
import league from '../data/league';
import axios from 'axios';

const styles = theme => ({
  button: {
    margin: '30px',
  }
});


class LeaguePasswordPage extends React.Component {

  state = {
    password: ""
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handlePasswordEnter = () => {
  axios.post('/api/enterPassword.php', {leagueId: league.id, password: this.state.password}).then(function(res) {
  console.log(res);
      //window.location.href = "/leagueEditName.php?id=" + league.id;
  });
  }

  render() {
    const { classes } = this.props;
    const { password } = this.state;

    return (
      <div className={classes.root}>
      <TextField 
              label="Passwort"
              fullWidth={true}
              onChange={this.handlePasswordChange}
           ></TextField>
      <Button className={classes.button} variant="contained" color="primary" onClick={this.handlePasswordEnter}>
        Liga bearbeiten
      </Button>
      </div>
    );
  }
}

let Page = withLayout(withStyles(styles)(LeaguePasswordPage));
ReactDOM.render(<Page />, document.querySelector('#leaguePassword'));
