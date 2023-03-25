import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _perso: Fighter,
    private _monster: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(_perso);
    this._perso = _perso;
    this._monster = _monster;
  }

  fight(): number {
    this._monster.forEach((enemy) => {
      this._perso.attack(enemy);
      enemy.attack(this._perso);
    });
    return this._perso.lifePoints === -1 ? -1 : 1;
  }
}