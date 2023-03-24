import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _jogador1: Fighter,
    private _jogador2: Fighter,
  ) {
    super(_jogador1);
    this._jogador1 = _jogador1;
    this._jogador2 = _jogador2;
  }

  fight(): number {
    while (this._jogador1.lifePoints > 0 && this._jogador2.lifePoints > 0) {
      this._jogador1.attack(this._jogador2);
      this._jogador2.attack(this._jogador1);
    }

    if (this._jogador1.lifePoints > 0) return 1;
    return -1;
  }
}