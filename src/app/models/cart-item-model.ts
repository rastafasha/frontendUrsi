import { Curso } from './curso';
export class CartItemModel {

    productId: number;
    productName: string;
    productPrice:number;
    description:string;
    quantity:number;
    category:string;

    constructor(product: Curso){
      this.productId= product.id;
      this.productName = product.name;
      this.category = 'DIGITAL_GOODS';
      this.description = product.description;
      this.productPrice = product.price;
      this.quantity = 1;
    }

}

