import { Component } from '@angular/core'
import { ProductDataFileService } from '../../services/product-data-file.service'

@Component({
    selector: 'product-info',
    templateUrl: 'app/product/info/product.info.component.html',
    styleUrls : ['app/product/info/product.info.component.css']
})
export class ProductInfoComponent {
    constructor(private productDataFileService : ProductDataFileService) {}
    products = this.productDataFileService.getProducts()

    nl2br(desc) {
        return desc.replace(/\n/g,"<br>")
    }
}
