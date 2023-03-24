import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this.lifePoints;
  }

  get strength(): number {
    return this.strength;
  }

  receiveDamage(attackPoints: number): number {
    const dano = attackPoints - this._lifePoints;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return dano;
  }

  attack(enemy: SimpleFighter): void {
    const ataque = this._strength;
    enemy.receiveDamage(ataque);
  }
}