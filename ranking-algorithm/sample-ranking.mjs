import battleData from '../battle-data/v1.6-star36.json';

class KickAssRanking {
    constructor(data) {
        this.data = data;
    }

    getRanking() {
        // For example, we are not doing any data processing here. Just return Diluc only
        // Why? Because he is just awesome
        return [
            {
                characterId: 10000016,
                score: 999,
            }
        ]
    }
}

export default KickAssRanking;

// we can exec this file by running
// node --experimental-modules --experimental-json-modules sample-ranking.mjs
const myAlgorithm = new KickAssRanking(battleData);
const ranking = myAlgorithm.getRanking();
console.log(ranking);