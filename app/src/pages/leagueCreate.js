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


class LeagueCreatePage extends React.Component {

  state = {
    name: ""
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  render() {
    const { classes } = this.props;
    const { name } = this.state;

    return (
      <div className={classes.root}>
      <TextField 
              hintText="Liganame"
              label="Liganame"
              fullWidth={true}
              onChange={this.handleNameChange}
           ></TextField>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => league.create(name)}>
        Liga anlegen
      </Button>
      </div>
    );
  }
}

let Page = withLayout(withStyles(styles)(LeagueCreatePage));
ReactDOM.render(<Page />, document.querySelector('#leagueCreate'));
