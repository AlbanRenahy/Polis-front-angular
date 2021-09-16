import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-nav',
  templateUrl: './burger-nav.component.html',
  styleUrls: ['./burger-nav.component.scss']
})
export class BurgerNavComponent implements OnInit {

  showMe:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  toogleTag(){
    this.showMe=!this.showMe
  }

}
