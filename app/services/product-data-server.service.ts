import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ProductDataServerService {

  // Local
  // serverUrl = 'http://localhost:8080';

  // Remote
  serverUrl = 'http://54.245.217.104:8080/onlineshop';

  productPath = this.serverUrl + '/product';

  constructor(private http: Http) {
  }

  addProduct(product: Product, file: any) {
    let formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.productPath + '/image', formData)
      .flatMap(filename => {
        product.picture = filename.text();
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, method: 'post'});
        let body = JSON.stringify(product);
        return this.http.post(this.productPath, body, options)
          .map(res => {
            return res.json();
          })
          .catch((error: any) => {
            return Observable.throw(new Error(error.status));
          });
      });
  }

  getProducts() {
    return this.http.get(this.productPath).map((res) => res.json());
  }

  getProduct(productID: number) {
    return this.http.get(this.productPath + '/' + productID).map((res) => {
      if (res.status === 200) {
        return res.json();
      } else if (res.status === 204) {
        return null;
      }
    }).catch((error: any) => {
      if (error.status === 500) {
        return Observable.throw(new Error(error.status));
      }
      else if (error.status === 400) {
        return Observable.throw(new Error(error.status));
      }
      else if (error.status === 409) {
        return Observable.throw(new Error(error.status));
      }
      else if (error.status === 406) {
        return Observable.throw(new Error(error.status));
      }
      return error;
    });
  }

}
