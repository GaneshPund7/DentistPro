import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dentist';
  isSidebarOpen = false;
  isNavbarFixed = false;
  hideUpIncon = false;
  hideUpIncon1 = false;
  hideUpIncon2 = false;
  hideUpIncon3 = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isNavbarFixed = false;
      }
    });
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isNavbarFixed = window.scrollY> 130;
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  toggleSidebarClose() {
    this.isSidebarOpen = false;
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
