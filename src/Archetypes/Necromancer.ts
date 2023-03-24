import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _magia: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._magia = 'mana';
    Necromancer.archetypeInstances();
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  static archetypeInstances() {
    this.instances += 1;
  }

  get energyType(): EnergyType {
    return this._magia;
  }
}