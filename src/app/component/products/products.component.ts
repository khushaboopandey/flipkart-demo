import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList :any;

  constructor(private api:ApiServiceService, private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.grtproguct().subscribe(res=>{
      this.productList=res;
       
      this.productList.array.forEach((a:any) => {
        Object.assign(a,{quantity:1,totel:a.price});
      });
    })
     
  }
  addtoCart(item:any){
   this.cartService.addToCard(item);

  }

}
