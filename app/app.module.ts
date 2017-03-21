import { products } from './product/mock';
import { ProductRoutingModule } from './product/product-routing';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import { AppComponent } from './app.component'
import { ProductAddComponent } from './product/add/product.add.component'
import { ProductListComponent } from './product/list/product.list.component'
import { ProductInfoComponent } from './product/info/product.info.component'

import { ProductDataFileService } from './services/product-data-file.service'

@NgModule({
	declarations: [ 
		AppComponent,
		ProductAddComponent,
		ProductListComponent,
		ProductInfoComponent
	],
	imports: [ BrowserModule, FormsModule, ProductRoutingModule ],
	bootstrap: [ AppComponent ],
	providers: [ ProductDataFileService, { provide: LocationStrategy, useClass: HashLocationStrategy } ]
})
export class AppModule {}