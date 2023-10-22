// data.service.ts
import { Injectable } from '@angular/core';
import { inventory } from '../inventory/inventory';

@Injectable()
export class cartServis {
	//ovdje pravi novi prazan array
	articlesInCart: inventory[] = [];
	//ovdje pusha u prazan array taj clan
	addArticleToCart(data: inventory) {
		this.articlesInCart.push(data);
	}
	//ovo vraca taj array
	getData() {
		return this.articlesInCart;
	}
}
