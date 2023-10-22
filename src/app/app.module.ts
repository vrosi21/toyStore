import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './inventory/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { cartServis } from './services/cartService';

@NgModule({
	declarations: [
		AppComponent,
		InventoryComponent,
		ProductListComponent,
		CartComponent,
	],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
	providers: [cartServis],
	bootstrap: [AppComponent],
})
export class AppModule {}
