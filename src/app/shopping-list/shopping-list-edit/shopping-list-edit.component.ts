import { Component, Input, OnInit, Output } from '@angular/core';
import { Ingredient, Unit, units } from 'src/app/shared/ingredient.model';

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
	availableUnits = units.possible;

    @Output()
    @Input()
    ingredients: Ingredient[];

	newShopItem = {
        name: "",
        amount: 1,
        unit: units.default,
    };

	addShopItem() {
        if (this.newShopItem.name == "") return

		let newShopItem = new Ingredient(
			this.newShopItem.name,
			this.newShopItem.amount,
			this.newShopItem.unit
		);
        this.ingredients.push(newShopItem)

        this.resetForm()
	}
    resetForm() {
        this.newShopItem = {
            name: "",
            amount: 1,
            unit: units.default,
        };
    }

	constructor() {}

	ngOnInit(): void {}
}
