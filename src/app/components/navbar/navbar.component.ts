import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('menu') menu: any;
  menuOpen: boolean = false;
  navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'services', label: 'Treatments' },
    { path: 'contact', label: 'Contact' },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
