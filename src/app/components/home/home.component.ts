import { Component, OnInit } from '@angular/core';
import  { Good }  from 'src/app/interfaces/good.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goods: Good[] = [
    {name: 'shoe1', price: 10, photoUrl: 'assets/shoe1.jpg'},
    {name: 'shoe2', price: 15, photoUrl: 'assets/shoe2.jpg'},
    {name: 'shoe3', price: 20, photoUrl: 'assets/shoe3.jpg'},
    {name: 'shoe4', price: 25, photoUrl: 'assets/shoe4.jpg'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(index) {
    console.log('added', this.goods[index])
  }

}
