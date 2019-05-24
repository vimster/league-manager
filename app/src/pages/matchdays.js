import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import GamesTable from '../components/gamestable';
import withLayout from './withLayout';
import league from '../data/league';
import moment from 'moment';
moment.locale('de');

const styles = theme => ({
});


class Matchdays extends React.Component {
  state = {
    selectedMatchday: 0
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

  selectMatchday = event => {
    this.setState({selectedMatchday: event.target.value});
  }

  render() {
    const { classes } = this.props;
    const { open, selectedMatchday } = this.state;
    const matchday = league.matchdays[selectedMatchday];
    const games = matchday ? matchday.games : [];
    const matchdays = league.matchdays;

    return (
      <div className={classes.root}>
          <Select
            style={{width: "100%"}}
            value={selectedMatchday}
            onChange={this.selectMatchday}
          >
          {matchdays.map((matchday, index) => (
            <MenuItem value={index}><b>{index+1}. Spieltag</b> - {moment(matchday.date).format("dddd, Do MMMM YYYY")}</MenuItem>
          ))}
          </Select>
            <br /><br /><br />
        <GamesTable games={games} />
      </div>
    );
  }
}

let Page = withLayout(withStyles(styles)(Matchdays));
ReactDOM.render(<Page />, document.querySelector('#matchday'));
