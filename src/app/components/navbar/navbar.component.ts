import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'services', label: 'Services' },
    { path: 'contact', label: 'Contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
