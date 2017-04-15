import { Product } from './../product';
import { ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core'
import {ProductDataServerService} from "../../services/product-data-server.service";
import 'rxjs/add/operator/switchMap'


@Component({
    selector: 'product-info',
    templateUrl: 'app/product/info/product.info.component.html',
    styleUrls : ['app/product/info/product.info.component.css']
})
export class ProductInfoComponent {

    product: Product;
    isNoData = true;
    constructor(private productDataServerService: ProductDataServerService, private route: ActivatedRoute) {}

    nl2br(desc) {
        return desc.replace(/\n/g, '<br>');
    }

    ngOnInit() {
       this.route.params.switchMap((params: Params) => this.productDataServerService.getProduct(+params['id'])).subscribe((product) => {
         if(product) {
           this.product = product;
           this.isNoData = false;
         }
       });
    }
}
