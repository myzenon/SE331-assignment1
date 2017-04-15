import { Router } from '@angular/router';
import { Component } from '@angular/core'
import {ProductDataServerService} from "../../services/product-data-server.service";
import {Product} from "../product";

@Component({
    selector: 'product-list',
    templateUrl: 'app/product/list/product.list.component.html',
    styleUrls : ['app/product/list/product.list.component.css']
})
export class ProductListComponent {

    products: Product[];

    constructor(private productDataServerService: ProductDataServerService, private router: Router) {}

    ngOnInit() {
      this.productDataServerService.getProducts().subscribe((products) => this.products = products);
    }

    truncateDesc(desc) {
        if(desc.length > 50) {
            return desc.substring(0, 47) + '...'
        }
        return desc
    }

    messagebox(product) {
        alert(`
            Product
            -------------------------------------
            ID : ${product.id}
            Name : ${product.name}
            Price : ${product.price} THB
            Amount : ${product.amount}
            Rating : ${product.rating}
            Picture : ${product.picture}
            
            Description
            -------------------------------------
            ${product.description}
        `)
    }

    goToInfoPage(product) {
        this.router.navigate(['/info/' + product.id]);
    }

}
