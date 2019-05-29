import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

class TeamList extends React.Component {

  render() {
    const {
      handleRemove,
      handleTeamnameChange,
      teams,
    } = this.props;

    var teamItems = teams.map((team) => {
    return (
      <ListItem key={team.id}>
      <TextField 
          value={team.name}
          fullWidth={true}
          onChange={(event) => handleTeamnameChange(team, event.target.value) }
       ></TextField>
      <ListItemSecondaryAction>
                      <IconButton aria-label="Delete" onClick={() => handleRemove(team.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
      </ListItem>
    )
  })
    return(
      <List>
       {teamItems}
    </List>
    )
  }
}
  
export default TeamList
