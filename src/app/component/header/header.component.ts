import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   public totelItem:number = 0;

  constructor(private router:Router,private cartService:CartService) {
    
   }

  ngOnInit(): void {
    this.router.navigate(['/products'])
    this.cartService.getProduct().subscribe((res =>{
       this.totelItem = res.length;
    })) 

  }

   


  
  
  
}
  

  
  

