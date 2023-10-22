import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { inventory } from '../inventory';
@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
	@Input() products: inventory[] = [];
	@Output() addedToCart = new EventEmitter<inventory>();

	addToCart(article: inventory) {
		this.addedToCart.emit(article);
	}
}
