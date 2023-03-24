import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _magia: EnergyType | 'mana' ;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._magia = 'mana';
    Mage.archetypeInstances();
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  static archetypeInstances() {
    this.instances += 1;
  }

  get energyType(): EnergyType | 'mana' {
    return this._magia;
  }
}