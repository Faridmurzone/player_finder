const API = "https://football-players-b31f2.firebaseio.com/players.json?print=pretty";  

// This functions may be placed in other side later  
// Function to get the API URL
const fetchPlayers = () => {
    fetch(API)
    .then(results => results.json())
    .then(data => this.setState({players: data}))
    .catch(err => ({err}))
    }  

export default fetchPlayers;


