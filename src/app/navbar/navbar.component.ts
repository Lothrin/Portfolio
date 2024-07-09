import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  navbarExpanded = false;

  toggleNavbar() {
    this.navbarExpanded = !this.navbarExpanded;
  }
}
