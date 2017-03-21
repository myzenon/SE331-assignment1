import { Product } from './../product';
import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core'
import { ProductDataFileService } from '../../services/product-data-file.service'
import 'rxjs/add/operator/switchMap'

@Component({
    selector: 'product-info',
    templateUrl: 'app/product/info/product.info.component.html',
    styleUrls : ['app/product/info/product.info.component.css']
})
export class ProductInfoComponent {
    constructor(private productDataFileService : ProductDataFileService, private route : ActivatedRoute) {}
    product : Product

    nl2br(desc) {
        return desc.replace(/\n/g,"<br>")
    }

    ngOnInit() {
       this.route.params.switchMap((params : Params) => this.productDataFileService.getProduct(+params['id'])).subscribe((product) => this.product = product)
    }
}
