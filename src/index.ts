import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('Miss Fortune');
const player2 = new Character('Ahri');
const player3 = new Character('lulu');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((element) => {
    element.fight();
  });
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};