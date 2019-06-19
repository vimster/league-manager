import context from 'context';
import shortid from 'shortid';
import axios from 'axios';

let league = context.league;

if (!league) {
	league = {
		name: "",
		tableSort: "ABSOLUTE",
		teams: [],
		matchdays: []
	}
}

league.getSets = function(game, isTeam1) {
	var sets = 0;
	if (isTeam1) {
		if (game.set11 > game.set12)
			sets++;
		if (game.set21 > game.set22)
			sets++;
		if (game.set31 > game.set32)
			sets++;
		if (game.set41 > game.set42)
			sets++;
		if (game.set51 > game.set52)
			sets++;
	} else {
		if (game.set11 < game.set12)
			sets++;
		if (game.set21 < game.set22)
			sets++;
		if (game.set31 < game.set32)
			sets++;
		if (game.set41 < game.set42)
			sets++;
		if (game.set51 < game.set52)
			sets++;
	}
	return sets;
};

league.getTable = function() {
	var allGames = this.matchdays.map((matchday) => matchday.games);
	allGames = allGames.flat();

	// get valid games
	allGames = allGames.filter((game) => game.team1 && game.team2);

	var table = this.teams.map((team) => {return {id: team.id, name: team.name, games: 0, points: 0, pointsAgainst: 0, balls: 0, ballsAgainst: 0, sets: 0, setsAgainst: 0}});

	var getTeam = function(id) {
		var teams = table.filter(team => team.id === id);
		return teams[0] ? teams[0] : {};
	};


	var orNull = function(points) {
		return points ? points : 0;
	}

	var getBalls = function(game, isTeam1) {
		var balls = 0;
		if (isTeam1) {
			return orNull(game.set11) + orNull(game.set21) + orNull(game.set31) + orNull(game.set41) + orNull(game.set51);
		} else {
			return orNull(game.set12) + orNull(game.set22) + orNull(game.set32) + orNull(game.set42) + orNull(game.set52);
		}
	};

	for (var i = 0; i < allGames.length; i++) {
		var game = allGames[i];

		var team1 = getTeam(game.team1);
		var team2 = getTeam(game.team2);

		var sets1 = this.getSets(game, true);
		var sets2 = this.getSets(game, false);

		var balls1 = getBalls(game, true);
		var balls2 = getBalls(game, false);

		var points1 = sets1 > sets2 ? 2 : 0;
		var points2 = sets2 > sets1 ? 2 : 0;

		if (sets1 === sets2) {
			points1 = 1;
			points2 = 1;
		}

		// Team 1
		if (team1) {
			team1.games++;
			team1.points += points1;
			team1.pointsAgainst += points2;
			team1.sets += sets1;
			team1.setsAgainst += sets2;
			team1.balls += balls1;
			team1.ballsAgainst += balls2;
		}

		if (team2) {
			team2.games++;
			team2.points += points2;
			team2.pointsAgainst += points1;
			team2.sets += sets2;
			team2.setsAgainst += sets1;
			team2.balls += balls2;
			team2.ballsAgainst += balls1;	
		}
	}

	return table.sort((team1, team2) => {
        if (this.tableSort === 'DIFFERENCE') {
        	let team1Difference = team1.points - team1.pointsAgainst;
        	let team2Difference = team2.points - team2.pointsAgainst;
			if (team1Difference === team2Difference) {
				if (team1.points === team2.points) {
					return team2.sets - team1.sets;
				}				
				return team2.points - team1.points;
			}
			return team2Difference - team1Difference;
        } else {
			if (team1.points === team2.points) {
				return team2.sets - team1.sets;
			}
			return team2.points - team1.points;        	
        }


	});
};

league.addTeam = function(name) {
  this.teams.push({id: shortid.generate(), name: name});	
};

league.removeTeam = function(id) {
  console.log("remove team: Id: " + id);
  this.teams = this.teams.filter(team => team.id !== id);	
};

league.addMatchday = function() {
  this.matchdays.push({date: "", games: []});	
};

league.getTeamnameById = function(teamId) {
	var team = this.teams.filter((team) => team.id === teamId);
	return team[0] ? team[0].name : "Team nicht gefunden";
}

league.getGamesOfMatchday = function(matchdayIndex) {
    var matchday = this.matchdays[matchdayIndex];
	return [
		{team1: this.teams[0].id, team2: this.teams[1].id, satz11: 2, satz12: 2, satz21: 2, satz22: 2, satz31: 2, satz32: 2, ergebnis1: 1, ergebnis2: 3},
		{team1: this.teams[0].id, team2: this.teams[1].id, satz11: 2, satz12: 2, satz21: 2, satz22: 2, satz31: 2, satz32: 2, ergebnis1: 1, ergebnis2: 3}
	];	
};

league.getMatchdays = function() {
	return [
		{team1: this.teams[0].id, team2: this.teams[1].id, satz11: 2, satz12: 2, satz21: 2, satz22: 2, satz31: 2, satz32: 2, ergebnis1: 1, ergebnis2: 3},
		{team1: this.teams[0].id, team2: this.teams[1].id, satz11: 2, satz12: 2, satz21: 2, satz22: 2, satz31: 2, satz32: 2, ergebnis1: 1, ergebnis2: 3}
	];	
};

league.save = function() {
	axios.post('/api/saveLeague.php', {id: league.id, league: league}).then(function(res) {
  		window.location.reload();
	});
}

league.create = function(name, password) {
	if (!name || !password) {
		return;
	}
	let id = shortid.generate();
	league.id = id;
	league.name = name;
	axios.post('/api/saveLeague.php', {password: password, id: id, league: league}).then(function(res) {
		
  		window.location.href = "/leagueEditName.php?id=" + id;
	});
}

export default league;
