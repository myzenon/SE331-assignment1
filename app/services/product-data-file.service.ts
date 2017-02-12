import { Injectable } from '@angular/core'
import { Product } from '../product/product'
import { products } from '../product/mock'

@Injectable()
export class ProductDataFileService {

    private products : Product[] = <Product[]> products

    addProduct(product : Product) : void {
        this.products.push(product)
    }

    getProducts() : Product[] {
        return this.products;
    }

}
