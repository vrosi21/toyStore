// data.service.ts
import { Injectable } from '@angular/core';
import { inventory } from '../inventory/inventory';

@Injectable()
export class cartServis {
	articlesInCart: inventory[] = [];

	// public addArticleToCart(article){
	// }

	addArticleToCart(data: inventory) {
		this.articlesInCart.push(data);

		console.log('TREBALO BI NESTO BIT', this.articlesInCart);
	}

	getData() {
		console.log('DOBIJENO: ', this.articlesInCart);
		return this.articlesInCart;
	}
}
