import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { ProductModel } from './models/product-model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: ProductModel[] = []
  constructor(
    private productService: ProductService,
    private errService: ErrorService
  ) { }

  ngOnInit() {
    this.getList
  }
  getList(){
    this.productService.getList().subscribe((res: any)=>{
     this.products =res.data;
    },(err)=>{

    })
  }

}
