import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isNavbarFixed = false;
  isSidebarOpen = false;
  hideUpIncon = false;
  hideUpIncon1 = false;
  hideUpIncon2 = false;
  hideUpIncon3 = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  hideIcons1(){
    this.hideUpIncon1 = !this.hideUpIncon1;
  }
  hideIcons2(){
    this.hideUpIncon2 = !this.hideUpIncon2;
  }
  hideIcons3(){
    this.hideUpIncon3 = !this.hideUpIncon3;
  }

}
