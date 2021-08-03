export enum Unit {
    pce = 'pce',
	g = 'g',
	ml = 'ml',
	kg = 'kg',
	l = 'l',
    oz = 'oz',
    mg = 'mg',
    tsp = 'tsp.',
    tbsp = 'tbsp.',
}
export const units = {
    default: Unit.pce,
    possible: Object.values(Unit).filter(
		(value) => typeof value !== 'number'
	)
}

export class Ingredient {
	public possibleUnits = units.possible;
    
	constructor(
		public name: string,
		public amount: number = 1,
		public unit: Unit = units.default
	) {}
}
