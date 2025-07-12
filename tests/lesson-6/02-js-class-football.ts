class Team {
    name: string;
    players: string[];

    constructor(name: string, players: string[]) {
        this.name = name;
        this.players = players;
    }

    addPlayer(name: string) {
        this.players.push(name);
    }

    listPlayers(){
        console.log(`Team name: ${this.name}`);
        console.log(`${this.players.join(', ')}`);
        // return this.players.forEach(player => { console.log(player)});
    }
}

const team = new Team("HAGL", ["Justin", "Andrea", "Etos"]);
console.log(team);

let playerList = ["Beckham", "David", "Ronaldo", "Messi", "Subasa"];
for (const player of playerList) {
    team.addPlayer(player);
}
console.log("New team: ", team);

team.listPlayers();
