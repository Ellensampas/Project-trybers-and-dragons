import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _luta: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._luta = 'stamina';
    Ranger.archetypeInstances();
  }

  static createdArchetypeInstances(): number {
    return this.instances;
  }

  static archetypeInstances() {
    this.instances += 1;
  }

  get energyType(): EnergyType {
    return this._luta;
  }
}