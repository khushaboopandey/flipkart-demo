import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products :any;
  public grandTotel !:number;
  constructor(private api:ApiServiceService,private router:Router,private cardservice:CartService) { }

  ngOnInit(): void {
     this.cardservice.getProduct().subscribe(res =>{
       this.products=res;
       this.grandTotel =this.cardservice.getTotelPrice();
     }) 
  }
  removeItem(item:any){
    this.cardservice.removeCartItem(item);
  }

  emptyCart(){
    this.cardservice.removeAllCart();

  }
   
}
