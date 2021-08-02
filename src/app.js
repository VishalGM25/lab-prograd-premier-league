//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let manager = [managerName, managerAge, currentTeam, trophiesWon];
  return manager;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(arr) {
  if (arr.length === 0) {
    return null;
  }
  let obj = {
    defender: arr[0],
    midfield: arr[1],
    forward: arr.length == 3 ? arr[2] : undefined,
  };

  return obj;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  let newArr = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut === year) {
      newArr.push(players[i]);
    }
  }
  return newArr;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  let newArr = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].position === position) {
      newArr.push(players[i]);
    }
  }
  return newArr;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  let newArr = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        newArr.push(players[i]);
        break;
      }
    }
  }
  //console.log(newArr);
  return newArr;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, timesWon) {
  let newArr = [];
  for (let i = 0; i < players.length; i++) {
    let tempTimes = 0;
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        if (++tempTimes >= timesWon) {
          newArr.push(players[i]);
        }
      }
    }
  }
  return [...new Set(newArr)];
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  let newArr = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].country == country) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName) {
          newArr.push(players[i]);
          break;
        }
      }
    }
  }
  //console.log(newArr);
  return newArr;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  console.log("noOfAwards :" + noOfAwards + " team :" + team + " age :" + age);
  let outputArr = [];
  for (let i = 0; i < players.length; i++) {
    if (
      players[i].awards.length >= noOfAwards &&
      players[i].team == team &&
      players[i].age <= age
    ) {
      outputArr.push(players[i]);
    }
  }
  //console.log("o/p :" + outputArr);
  return outputArr;
}
//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; i < players.length; j++) {
      if (players[i] < players[j]) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
  return players;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
// function FilterByTeamxSortByNoOfAwards(team) {
//   console.log(team);
// }
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
