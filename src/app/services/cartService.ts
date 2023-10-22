// data.service.ts
import { Injectable } from '@angular/core';
import { inventory } from '../inventory/inventory';

@Injectable()
export class cartServis {
	articlesInCart: inventory[] = [];

	addArticleToCart(data: inventory) {
		this.articlesInCart.push(data);
	}

	getData() {
		return this.articlesInCart;
	}
}
