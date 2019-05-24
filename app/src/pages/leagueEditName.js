import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withLayout from './withLayout';
import league from '../data/league';


const styles = theme => ({
  button: {
    margin: '30px',
  }
});

class LeagueEditNamePage extends React.Component {

  state = {
    name: league.name
  }

  handleNameChange = (event) => {
    const name = event.target.value;
    league.name = name;
    this.setState({name: name});
  }

  render() {
    const { classes } = this.props;
    const { name } = this.state;

    return (
      <div className={classes.root}>
      <TextField 
              value={name}
              label="Liganame"
              fullWidth={true}
              onChange={this.handleNameChange}
           ></TextField>
      <Button className={classes.button} variant="contained" color="primary" onClick={league.save}>
        Speichern
      </Button>
      </div>
    );
  }
}

let Page = withLayout(withStyles(styles)(LeagueEditNamePage));
ReactDOM.render(<Page />, document.querySelector('#leagueEditName'));
