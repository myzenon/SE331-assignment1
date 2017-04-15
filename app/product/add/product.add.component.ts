import { Component, ElementRef, ViewChild  } from '@angular/core';
import { Product } from '../product';
import {ProductDataServerService} from "../../services/product-data-server.service";
import {Router} from "@angular/router";

@Component({
    selector: 'product-add',
    templateUrl: 'app/product/add/product.add.component.html',
    styleUrls : [ 'app/product/add/product.add.component.css' ]
})
export class ProductAddComponent {

    @ViewChild('inputPicture') inputPicture: ElementRef;
    newProduct: Product = new Product();

    constructor(private productDataServerService: ProductDataServerService, private router: Router) {}

    // addPicture() {
    //     this.newProduct.picture = this.inputPicture.nativeElement.files[0].name;
    // }

    resetForm() {
        this.inputPicture.nativeElement.value = '';
        this.newProduct = new Product();
    }

    addProduct() {
        if (
            // this.newProduct.id !== undefined &&
            this.newProduct.name !== undefined &&
            this.newProduct.description !== undefined &&
            this.newProduct.price !== undefined &&
            this.newProduct.amount !== undefined &&
            this.newProduct.rating !== undefined
        ) {
            let inputPictureEl: HTMLInputElement = this.inputPicture.nativeElement;
            this.productDataServerService.addProduct(this.newProduct, inputPictureEl.files.item(0)).subscribe(() => this.router.navigate(['/list']));
            // this.messagebox(this.newProduct);
            this.resetForm();
        }
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
        `);
    }
}
