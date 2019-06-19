import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withLayout from './withLayout';
import league from '../data/league';


const styles = theme => ({
  button: {
    margin: '30px',
  },
  formControl: {
    marginBottom: theme.spacing(2)
  }
});

class LeagueEditNamePage extends React.Component {

  state = {
    name: league.name,
    tableSort: league.tableSort
  }

  handleNameChange = (event) => {
    const name = event.target.value;
    league.name = name;
    this.setState(league);
  }

  handleSortChange = (event) => {
    league.tableSort = event.target.value;
    this.setState(league);
  }

  render() {
    const { classes } = this.props;
    const { name, tableSort } = this.state;
    const sort = tableSort || "ABSOLUTE";

    return (
      <div className={classes.root}>
      <TextField 
              className={classes.formControl}
              value={name}
              label="Liganame"
              fullWidth={true}
              onChange={this.handleNameChange}
           ></TextField>
      <FormControl className={classes.formControl} fullWidth={true}>
        <InputLabel htmlFor="table-sort-simple">Tabellen-Sortierung</InputLabel>
        <Select
          value={sort}
          fullWidth={true}
          onChange={this.handleSortChange}
          inputProps={{
            id: 'table-sort-simple',
          }}
        >
          <MenuItem value="ABSOLUTE">Sortieren nach gewonnenen Punkten</MenuItem>
          <MenuItem value="DIFFERENCE">Sortieren nach Punkte-Differenz</MenuItem>
        </Select>
        </FormControl>
      <Button className={classes.button} variant="contained" color="primary" onClick={league.save}>
        Speichern
      </Button>
      </div>
    );
  }
}

let Page = withLayout(withStyles(styles)(LeagueEditNamePage));
ReactDOM.render(<Page />, document.querySelector('#leagueEditName'));
