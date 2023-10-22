import { Component } from '@angular/core';
import { inventory } from '../inventory/inventory';
import { cartServis } from '../services/cartService';

@Component({
	selector: 'app-cart2',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
	constructor(private cart: cartServis) {
		this.articlesInCart = this.cart.getData();
	}

	articlesInCart: inventory[] = [];

	public removeFromCart(indexToRemove: number) {
		this.articlesInCart.splice(indexToRemove, 1);
	}
}
