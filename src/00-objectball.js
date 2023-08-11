const gameObject = {
    home: {
    teamName: "Brooklyn Nets",
    colors: ["Black","White"],
    players: ["Alan Anderson","Reggie Evans","Brook Lopez","Mason Plumlee","Jason Terry"],
    },
    away: {
    teamName:"",
    colors:"",
    players:"",
    }
    }
    console.log(gameObject);
   function homeTeamName() {
  let object = gameObject
  return object['home']['teamName']
}

console.log(homeTeamName)