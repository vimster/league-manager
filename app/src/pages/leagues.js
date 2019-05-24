import React from 'react';
import ReactDOM from 'react-dom';
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
import { withStyles } from '@material-ui/core/styles';
import withLayout from './withLayout';
import c from 'context';
import league from '../data/league';
import TeamList from '../components/teamlist';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
});


class LeaguesPage extends React.Component {
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
    // this.setState({ lue: e.target.value })
  }

  render() {
    const { classes } = this.props;
    const { teams } = this.state;

    return (
      <div>
      <TeamList teams={teams} handleRemove={this.handleRemoveTeam} />
      <TextField 
              hintText="Mannschaft hinzufügen"
              fullWidth={true}
              onKeyPress={this.handleAddTeam}
           ></TextField>
      </div>
    );
  }
}

let Page = withLayout(withStyles(styles)(LeaguesPage));
ReactDOM.render(<Page />, document.querySelector('#teams'));
