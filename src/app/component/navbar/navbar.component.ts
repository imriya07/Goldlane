import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  firstcolumn:boolean = true;
  secondcolumn:boolean = false;

  ngOnInit(): void {
  }
  goTo():void{
    this.firstcolumn = false;
    this.secondcolumn = true;

  }


}
