import { Router } from '@angular/router';
import { Component } from '@angular/core'
import { ProductDataFileService } from '../../services/product-data-file.service'

@Component({
    selector: 'product-list',
    templateUrl: 'app/product/list/product.list.component.html',
    styleUrls : ['app/product/list/product.list.component.css']
})
export class ProductListComponent {

    constructor(private productDataFileService : ProductDataFileService, private router : Router) {}

    products = this.productDataFileService.getProducts()

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
