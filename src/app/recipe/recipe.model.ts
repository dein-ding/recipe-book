import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
	public name: string;
	public describtion: string;
	public imagePath: string;
	public ingredients: Ingredient[];
	public cookingSteps: string[];

	constructor(
		name: string,
		desc: string,
		imgPath: string,
		ingredients: Ingredient[] = [],
		cookingSteps: string[] = [],
	) {
		this.name = name;
		this.describtion = desc;
		this.imagePath = imgPath;
		this.ingredients = ingredients;
		this.cookingSteps = cookingSteps;
	}
}
